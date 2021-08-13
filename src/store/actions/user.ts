import { ActionType } from "../../constant/actionType"
import { IAppAction } from "../../interface/iaction";

import {
  ILogin,
  IUserInfo
} from "../../interface/iuser";

export const login = (data: ILogin): IAppAction => {
  return {
    type: ActionType.LOGIN,
    payload: data
  }
}

export const getUserInfo = (): IAppAction => {
  return {
    type: ActionType.GET_USER_INFO
  }
}

export const setUserInfo = (data: IUserInfo): IAppAction => {
  return {
    type: ActionType.SET_USER_INFO,
    payload: data
  }
}
