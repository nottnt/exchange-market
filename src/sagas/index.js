import { all } from 'redux-saga/effects'
import marketSaga from './market'
export default function* Sagas() {
    yield all([
        marketSaga()
    ])
}