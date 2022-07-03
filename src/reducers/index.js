import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import market from './market'

const createRootReducer = (history) => combineReducers({
    market,
    router: connectRouter(history),
})
export default createRootReducer