import {
    all,
    call,
    take,
    delay,
    put,
    fork,
    cancel,
    select
} from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { get24HrsTicker } from '../services'
import { updateCurrenciesData, updateCurrencyData } from '../actions/market'
import { stopLoading } from '../actions/app'
import constants from '../constants'
import { formatWsMsgData } from '../utils'

function* fetch24HrsTicker(pairId) {
    while (true) {
        const state = yield select();
        const data = yield call(get24HrsTicker, pairId)
        if (pairId) yield put(updateCurrencyData(data))
        else yield put(updateCurrenciesData(data))
        if (state.app.isLoading) yield put(stopLoading())
        yield delay(5000);
    }
}

function* watchFetch24HrsTicker() {
    while (true) {
        const action = yield take(constants.FETCH_24H_TICKER);
        const fetch24HrsTickerTask = yield fork(fetch24HrsTicker, action.payload.pairId)
        yield take(constants.STOP_FETCH_24H_TICKER)
        yield cancel(fetch24HrsTickerTask)
    }
}

function initWebsocket() {
    return eventChannel(emitter => {
        const ws = new WebSocket('wss://ws.satangcorp.com/ws/!miniTicker@arr@3000ms')
        ws.onopen = () => {
            console.log('opening...')
        }
        ws.onerror = (error) => {
            console.log('WebSocket error ' + error)
            console.dir(error)
        }
        ws.onmessage = (e) => {

            try {
                let msg = null
                msg = JSON.parse(e.data)
                const currenciesData = formatWsMsgData(msg)
                emitter(updateCurrenciesData(currenciesData))
            } catch (e) {
                console.error(`Error parsing : ${e.data}`)
            }
        }
        // unsubscribe function
        return () => {
            console.log('Socket off')
        }
    })
}

function* wsSubscribe() {
    const channel = yield call(initWebsocket)
    while (true) {
        const action = yield take(channel)
        yield put(action)
    }
}

export default function* marketSaga() {
    yield all([
        watchFetch24HrsTicker(),
        wsSubscribe()
    ])
}