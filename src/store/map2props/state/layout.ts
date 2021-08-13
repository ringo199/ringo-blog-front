
import { ILayoutState } from "../../../interface/istate";

export const mapStateToProps = (state: ILayoutState) => ({
  global: state.global,
  user: state.user
})
