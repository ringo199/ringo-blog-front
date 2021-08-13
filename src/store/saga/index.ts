import { all } from 'redux-saga/effects';

import { saga as userSaga } from './user';
import { saga as gameSaga } from './game';

export default function* rootSaga() {
    yield all([userSaga(), gameSaga()]);
}
