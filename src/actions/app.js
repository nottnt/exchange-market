import constants from '../constants'

export const setLoading = () => {
    return {
        type: constants.SET_LOADING,
    }
}

export const stopLoading = () => {
    return {
        type: constants.STOP_LOADING,
    }
}

