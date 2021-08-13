import React, { FC } from 'react';
import { IVideoConfig } from '../interface/ipage/igamepage';
import "./less/videoModule.css"

const VideoModule: FC<IVideoConfig> = (props) => (
  <div className="videoModule">
    <video
      className="videoModule__video"
      src={props.url}
      controls
    ></video>
  </div>
)

export default VideoModule;
