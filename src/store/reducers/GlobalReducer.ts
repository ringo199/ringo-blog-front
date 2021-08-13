import { IAppAction } from '../../interface/iaction'
import { ActionType } from '../../constant/actionType'
import { Global, Message } from '../../model/config';
import { IGlobal } from "../../interface/iconfig"

export const GlobalReducer = (state: IGlobal = new Global(), action: IAppAction) : IGlobal => {
  switch (action.type) {
    case ActionType.SHOW_MESSAGE:
      state.message.push(action.payload as Message)
      return {
        ...state,
        message: state.message
      }
    default:
      return state;
  }
};
