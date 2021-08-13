
import { IUserState } from "../../../interface/istate";

export const mapStateToProps = (state: IUserState) => ({
  user: state.user
})
