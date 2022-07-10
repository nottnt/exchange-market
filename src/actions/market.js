import constants from '../constants'

export const changeCurrencyPair = (pairId) => {
    return {
        type: constants.CHANGE_CURRENCY,
        payload: {
            pairId
        }
    }
}

export const fetch24HrsTicker = (pairId) => {
    return {
        type: constants.FETCH_24H_TICKER,
        payload: {
            pairId
        }
    }
}

export const stopFetch24HrsTicker = () => {
    return {
        type: constants.STOP_FETCH_24H_TICKER,
    }
}

export const updateCurrenciesData = (payload) => {
    return {
        type: constants.UPDATE_CURRENCIES_DATA,
        payload
    }
}

export const updateCurrencyData = (payload) => {
    return {
        type: constants.UPDATE_CURRENCY_DATA,
        payload
    }
}