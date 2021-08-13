import { ActionType } from '../../constant/actionType'
import { service } from '../../service/game'
import { call, put, takeLatest } from 'redux-saga/effects';
import { IResp } from '../../interface/iajax';
import { showMessage } from '../actions/global';
import { ErrorMessage } from '../../model/config';
import { IGamePage } from '../../interface/ipage/igamepage';
import { setGamePageConfig } from '../actions';
import { Status } from '../../constant/status';

export function* saga () {
    yield takeLatest(ActionType.GET_GAME_PAGE_CONFIG, getGamePageConfig);
}

function* getGamePageConfig () {
    const res: IResp<IGamePage> = yield call(service.getGamePageConfig)

    if (res.code === Status.SUCCESS) {
        yield put(setGamePageConfig(res.data))
    } else {
        yield put(showMessage(new ErrorMessage(res.message)))
    }
}
