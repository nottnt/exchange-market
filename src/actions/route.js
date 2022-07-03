import { push } from 'react-router-redux'
import configureStore from '../configure-store'
const store = configureStore()

export const changePath = (path) => {
    return store.dispatch(push(path))
}

export const test = () => {
    return store.dispatch({
        type: 'TEST',
        payload: {
            gg: 'ggwp'
        }
    })
}