import store from '../configure-store'
import constants from '../constants'

export const changeCurrencyPair = (pairId) => {
    return store.dispatch({
        type: constants.CHANGE_CURRENCY,
        payload: {
            pairId
        }
    })
}