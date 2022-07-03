import { all, call } from 'redux-saga/effects'
import constants from '../constants'

function* fetchCurrencies(pairId) {

}

function* changeCurrencyPair() {
    const action = yield take(constants.CHANGE_CURRENCY);
    yield call(fetchCurrencies, action.payload.pairId)
}

export default function* marketSaga() {
    yield all([
        changeCurrencyPair
    ])
}