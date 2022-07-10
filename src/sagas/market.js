import { all, call, take, delay, put, fork, cancel, select } from 'redux-saga/effects'
import { get24HrsTicker } from '../services'
import { updateCurrenciesData, updateCurrencyData } from '../actions/market'
import { stopLoading } from '../actions/app'
import constants from '../constants'

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


export default function* marketSaga() {
    yield all([
        watchFetch24HrsTicker()
    ])
}