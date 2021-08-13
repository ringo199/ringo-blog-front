import { ActionType } from "../../constant/actionType"
import { IAppAction } from "../../interface/iaction";

import {
  IGamePage,
  ITagConfig,
  IFuncConfig,
  IVideoConfig,
  IBasicConfig,
  IGameInfoConfig
} from "../../interface/ipage/igamepage";

export const setGameInfo = (data: IGameInfoConfig): IAppAction => {
  return {
    type: ActionType.SET_GAME_INFO,
    payload: data
  }
}

export const setTagConfig = (data: ITagConfig): IAppAction => {
  return {
    type: ActionType.SET_TAG_CONFIG,
    payload: data
  }
}

export const setFuncConfig = (data: IFuncConfig): IAppAction => {
  return {
    type: ActionType.SET_FUNC_CONFIG,
    payload: data
  }
}

export const setVideoConfig = (data: IVideoConfig): IAppAction => {
  return {
    type: ActionType.SET_VIDEO_CONFIG,
    payload: data
  }
}

export const setBasicConfig = (data: IBasicConfig): IAppAction => {
  return {
    type: ActionType.SET_BASIC_CONFIG,
    payload: data
  }
}

export const setGamePageConfig = (data: IGamePage): IAppAction => {
  return {
    type: ActionType.SET_GAME_PAGE_CONFIG,
    payload: data
  }
}

export const getGamePageConfig = (): IAppAction => {
  return {
    type: ActionType.GET_GAME_PAGE_CONFIG
  }
}
