import { combineReducers } from "redux"
import { GamePageConfigReducer } from './GamePageConfigReducer'
import { UserInfoReducer } from './UserInfoReducer'
import { GlobalReducer } from './GlobalReducer'

export default combineReducers({
  gamePageConfig: GamePageConfigReducer,
  user: UserInfoReducer,
  global: GlobalReducer
})
