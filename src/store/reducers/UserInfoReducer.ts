import { IAppAction } from '../../interface/iaction'
import { ActionType } from '../../constant/actionType'
import { UserInfo } from '../../model/user';
import { IUserInfo } from "../../interface/iuser"

export const UserInfoReducer = (state: IUserInfo = new UserInfo(), action: IAppAction) : IUserInfo => {
  switch (action.type) {
    case ActionType.SET_USER_INFO:
      return {
        ...action.payload
      }
    default:
      return state;
  }
};
