
import { bindActionCreators, Dispatch, Action } from 'redux';

import {
  setGameInfo,
  setTagConfig,
  setFuncConfig,
  setBasicConfig,
  setVideoConfig,
  setGamePageConfig,
  getGamePageConfig
} from '../../actions';

import {
  IGamePage,
  ITagConfig,
  IBasicConfig,
  IFuncConfig,
  IVideoConfig,
  IGameInfoConfig
} from '../../../interface/ipage/igamepage';

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => 
  bindActionCreators({
    setTagConfig: (data: ITagConfig) => (
      dispatch(
        setTagConfig(data)
      )
    ),
    setFuncConfig: (data: IFuncConfig) => (
      dispatch(
        setFuncConfig(data)
      )
    ),
    setVideoConfig: (data: IVideoConfig) => (
      dispatch(
        setVideoConfig(data)
      )
    ),
    setGameInfo: (data: IGameInfoConfig) => (
      dispatch(
        setGameInfo(data)
      )
    ),
    setBasicConfig: (data: IBasicConfig) => (
      dispatch(
        setBasicConfig(data)
      )
    ),
    setGamePageConfig: (data: IGamePage) => (
      dispatch(
        setGamePageConfig(data)
      )
    ),
    getGamePageConfig: () => (
      dispatch(
        getGamePageConfig()
      )
    ),
  }, dispatch)
  