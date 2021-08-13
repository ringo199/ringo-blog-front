import { IAppAction } from "./iaction";
import { IGlobal } from "./iconfig";
import {
  IGamePage,
  ITagConfig,
  IFuncConfig,
  IVideoConfig,
  IBasicConfig,
  IGameInfoConfig
} from "./ipage/igamepage";

import { IPageRoute } from "./irouter";
import { IUserInfo } from "./iuser";

export interface IPageState extends IPageRoute<any> {
  className?: string
}

export interface IUserState extends IPageState {
  user: IUserInfo,
  getUserInfo: () => IAppAction
}

export interface IGamePageState extends IPageState {
  gamePageConfig: IGamePage,
  setTagConfig: (data: ITagConfig) => IAppAction,
  setFuncConfig: (data: IFuncConfig) => IAppAction,
  setVideoConfig: (data: IVideoConfig) => IAppAction,
  setGameInfo: (data: IGameInfoConfig) => IAppAction,
  setBasicConfig: (data: IBasicConfig) => IAppAction,
  setGamePageConfig: (data: IGamePage) => IAppAction,
  getGamePageConfig: () => IAppAction
}

export interface ILayoutState extends IPageState {
  global: IGlobal,
  user: IUserState
}
