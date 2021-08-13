import { ActionType } from '../../constant/actionType'
import { service } from '../../service/user'
import { call, put, takeLatest } from 'redux-saga/effects';
import { ILogin, IUserInfo } from '../../interface/iuser';
import { IResp } from '../../interface/iajax'
import { setUserInfo } from '../actions/user';
import { showMessage } from '../actions/global';
import { IAppAction } from '../../interface/iaction';
import { ErrorMessage } from '../../model/config';
import { Status } from '../../constant/status';

export function* saga () {
    yield takeLatest(ActionType.LOGIN, login);
    yield takeLatest(ActionType.GET_USER_INFO, getUserInfo);
}

function* login (action : IAppAction) {
    yield call(service.login, action.payload as ILogin)
}

function* getUserInfo () {
    const res: IResp<IUserInfo> = yield call(service.getUserInfo)

    if (res.code === Status.SUCCESS) {
        yield put(setUserInfo(res.data))
    } else {
        yield put(showMessage(new ErrorMessage(res.message)))
    }
}
