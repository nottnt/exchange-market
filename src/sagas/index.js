import { all, takeEvery, put } from 'redux-saga/effects'
import marketSaga from './market'

function* exampleSaga() {
    console.log("Example saga reached");
}

function* test() {
    console.log('dddsasd')
}

function* watchTest() {
    const { payload } = yield takeEvery('TEST', test)
    console.log('a', payload)
}

export default function* Sagas() {
    yield all([
        exampleSaga(),
        marketSaga(),
        watchTest()
    ])
}