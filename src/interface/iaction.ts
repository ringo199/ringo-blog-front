import { Action } from "redux";
import { ActionType } from "../constant/actionType";

export interface IApplicationProps {
}

export interface IAppAction extends Action<ActionType> {
  type: ActionType,
  payload?: any;
}
