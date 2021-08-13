import React from 'react'
import LoadProgressModule from "./loadProgressModule";
import { IGameConfig, ILoadProgressConfig } from '../interface/ipage/igamepage'
import './less/gameModule.css'

class GameModule extends React.Component<IGameConfig, ILoadProgressConfig> {
  constructor(props: IGameConfig | Readonly<IGameConfig>) {
    super(props)
    this.state = {
      progress: 0
    }
  }

  componentDidMount () {
    const container = document.querySelector("#unity-container") as HTMLElement
    const canvas = document.querySelector("#unity-canvas") as HTMLElement

    canvas.style.width = container.clientWidth + "px"
    canvas.style.height = container.clientHeight + "px"

    const processUpdate = (progress: number) => {
      this.setState({ progress })
    }

    if (window.createUnityInstance) {
      window.createUnityInstance(canvas, this.props.info, processUpdate)
    } else {
      const script = document.createElement("script")
      const resourceRoot = window.location.origin
      script.src = this.props.loaderUrl || resourceRoot + '/gameLoader.js'
      script.onload = () => {
        window.createUnityInstance(canvas, this.props.info, processUpdate)
      }
      document.body.appendChild(script)
    }
  }

  render () {
    return (
      <div id="unity-container" className="gameModule">
        <LoadProgressModule {...this.state} />
        <canvas id="unity-canvas"></canvas>
      </div>
    )
  }
}

export default GameModule;
