import { all } from 'redux-saga/effects'
import marketSaga from './market'

function* exampleSaga() {
    console.log("Example saga reached");
}


export default function* Sagas() {
    yield all([
        exampleSaga(),
        marketSaga()
    ])
}