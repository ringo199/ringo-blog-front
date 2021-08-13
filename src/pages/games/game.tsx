import React from 'react';
import GamePage from '../../components/gamePage';
import { connect } from 'react-redux';
import { IGamePageState } from "../../interface/istate";
import { mapStateToProps } from "../../store/map2props/state/game"
import { mapDispatchToProps } from "../../store/map2props/dispatch/game"

class GameSinglePage extends React.Component<IGamePageState, any> {
  constructor(props: IGamePageState | Readonly<IGamePageState>) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.getGamePageConfig()
  }

  render() {
    return <GamePage {...this.props.gamePageConfig} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSinglePage);