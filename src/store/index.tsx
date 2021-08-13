import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';

import reducers from './reducers/CombinedReducers'

const appSagaMiddleware = createSagaMiddleware();

const store : Store<any, any> = createStore(reducers, applyMiddleware(appSagaMiddleware))

appSagaMiddleware.run(rootSaga);

export default store
