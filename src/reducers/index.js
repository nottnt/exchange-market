import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import market from './market'
import app from './app'

const rootReducers = (history) => combineReducers({
    market,
    app,
    router: connectRouter(history),
})

export default rootReducers