import constants from '../constants'

export default function market(state = {}, action) {
    const { type, payload } = action

    switch (type) {
        case constants.CHANGE_CURRENCY:
            return { ...state, payload }
        default:
            return state
    }
}