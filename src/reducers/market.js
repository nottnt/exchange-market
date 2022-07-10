import constants from '../constants'

export default function market(state = {}, action) {
    const { type, payload } = action

    switch (type) {
        case constants.CHANGE_CURRENCY:
            return { ...state, payload }
        case constants.UPDATE_CURRENCIES_DATA:
            return { ...state, currencies: [...payload] }
        case constants.UPDATE_CURRENCY_DATA: 
            return { ...state, currency: {...payload} }
        case 'TEST':
            return { ...state, ...payload }
        default:
            return state
    }
}