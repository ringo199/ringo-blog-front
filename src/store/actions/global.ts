import { ActionType } from "../../constant/actionType"
import { IAppAction } from "../../interface/iaction";

import {
  IMessage
} from "../../interface/iconfig";

export const showMessage = (data: IMessage): IAppAction => {
  return {
    type: ActionType.SHOW_MESSAGE,
    payload: data
  }
}
