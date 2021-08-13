import React, { FC } from 'react';
import { Progress } from "antd";
import { ILoadProgressConfig } from '../interface/ipage/igamepage';
import "./less/loadProgressModule.css"

const LoadProgressModule: FC<ILoadProgressConfig> = (props) => (
  <div className="loadProgressModule" style={props.progress === 1 ? {
    display: 'none'
  } : {}}>
    <Progress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={Math.round(props.progress * 100)}
    />
  </div>
)

export default LoadProgressModule;
