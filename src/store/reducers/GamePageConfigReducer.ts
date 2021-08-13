import { IAppAction } from '../../interface/iaction'
import { ActionType } from '../../constant/actionType'
import { GamePageConfig } from '../../model/game';
import { IGamePage } from "../../interface/ipage/igamepage"

export const GamePageConfigReducer = (state: IGamePage = new GamePageConfig(), action: IAppAction) : IGamePage => {
  switch (action.type) {
    case ActionType.SET_GAME_PAGE_CONFIG:
      return {
        ...state,
        ...action.payload
      }
    case ActionType.SET_GAME_LOADER:
      return {
        ...state,
        game: {
          info: state.game.info,
          loaderUrl: action.payload
        }
      }
    case ActionType.SET_GAME_INFO:
      return {
        ...state,
        game: {
          loaderUrl: state.game.loaderUrl,
          info: action.payload
        }
      }
    case ActionType.SET_BASIC_CONFIG:
      return {
        ...state,
        basic: {
          ...state.basic,
          ...action.payload
        }
      }
    case ActionType.SET_VIDEO_CONFIG:
      return {
        ...state,
        video: {
          ...action.payload
        }
      }
    case ActionType.SET_TAG_CONFIG:
      return {
        ...state,
        tag: {
          ...action.payload
        }
      }
    case ActionType.SET_FUNC_CONFIG:
      return {
        ...state,
        func: {
          ...action.payload
        }
      }
    default:
      return state;
  }
};
