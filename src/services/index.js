const BASE_URL_SATANG = 'https://satangcorp.com/api/v3'

export const get24HrsTicker = (symbol = null) => {
    const symbolParams = symbol ? `?symbol=${symbol}` : ''

    return fetch(`${BASE_URL_SATANG}/ticker/24hr${symbolParams}`, {
        method: 'GET',
        redirect: 'follow'
      })
        .then(response => response.json())
        .catch(error => console.log('error', error));
}
