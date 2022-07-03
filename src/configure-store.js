import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers'
import rootSagas from './sagas'

import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);

