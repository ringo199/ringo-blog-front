
import { bindActionCreators, Dispatch, Action } from 'redux';
import { ILogin } from '../../../interface/iuser';

import {
  login,
  getUserInfo
} from '../../actions/user';

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => 
  bindActionCreators({
    login: (data: ILogin) => (
      dispatch(
        login(data)
      )
    ),
    getUserInfo: () => (
      dispatch(
        getUserInfo()
      )
    )
  }, dispatch)
  