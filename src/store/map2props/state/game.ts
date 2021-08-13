
import { IGamePageState } from "../../../interface/istate";

export const mapStateToProps = (state: IGamePageState) => ({
  gamePageConfig: state.gamePageConfig
})
