// eslint-disable-next-line no-undef
const apiServiceUrl = process.env.REACT_APP_API_URL;
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
const distance =  `${apiServiceUrl}distance`;
const history =  `${apiServiceUrl}history`;

const checkResponse = async (response, code) => {
  const NOT_MODIFIED = 304;
  if (response.status === NOT_MODIFIED) {
    return;
  }
  if (response.status !== code) {
    const json = await response.json();
    return Promise.reject(new Error(json.error));
  }
};

export async function getDistance({ source, destination, signal}) {
  console.log(distance);
    const response = await fetch(distance, {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify({
        source, destination,
      }),
      signal,
    });
    await checkResponse(response, 200);
    return response.json();
}

export async function getHistory({  signal}) {
    const response = await fetch(history, {
      method: 'GET',
      headers,
      mode: 'cors',

      signal,
    });
    await checkResponse(response, 200);
    return response.json();
}
