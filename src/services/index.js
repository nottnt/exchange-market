const BASE_URL = 'https://satangcorp.com/api/v3'

export const get24HrsTicker = (symbol = null) => {
    const symbolParams = symbol ? `?symbol=${symbol}` : ''

    return fetch(`${BASE_URL}/ticker/24hr${symbolParams}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}