import constants from '../constants'

export default function app(state = {}, action) {
    const { type } = action

    switch (type) {
        case constants.SET_LOADING:
            return { ...state, isLoading: true }
        case constants.STOP_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}