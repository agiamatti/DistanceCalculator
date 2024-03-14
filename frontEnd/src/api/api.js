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

  const json = await response.json();
  if (!response.ok) {
    if (json.error) {
      throw new Error(json.error);
    }
    throw new Error(`Unknown error! status: ${response.status}`);
  }
  return json;
}
