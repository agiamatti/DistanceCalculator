import { apiServiceUrl } from '../../constants';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const distance = `${apiServiceUrl}distance`;

export default async function getDistance({ source, destination, signal }) {
  const response = await fetch(distance, {
    method: 'POST',
    headers,
    mode: 'cors',
    body: JSON.stringify({
      source, destination,
    }),
    signal,
  });

  if (!response.ok) {
    let errorMsg = `Unknown error! status: ${response.status}, statusText: ${response.statusText}`;
    try {
      const json = await response.json();
      errorMsg = json.error || errorMsg;
    } catch {
      // do nothing; error message handled
    }
    throw new Error(errorMsg);
  }

  return response.json();
}
