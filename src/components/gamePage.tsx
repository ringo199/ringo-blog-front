import React, { FC } from 'react'
import { Tabs, Divider } from 'antd'

import GameModule from './gameModule'
import VideoModule from './videoModule'
import TagModule from './tagModule'
import FuncModule from './funcModule'
import { IGamePage } from '../interface/ipage/igamepage'
import "./less/gamePage.css"

const GamePage: FC<IGamePage> = (props) => (
  <div className="gamePage">
    <div className="gamePage__title">{props.basic.title}</div>
    <div className="gamePage__body">
      <div className="gamePage__body__content">
        <div className="gamePage__body__content__game">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="视频" key="1">
              <VideoModule {...props.video} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="游戏" key="2">
              <GameModule {...props.game} />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <div className="gamePage__body__content__func">
          <FuncModule {...props.func} />
        </div>
      </div>
      <div className="gamePage__body__info">
        <div className="gamePage__body__info__tag">
          <Divider orientation="left">标签</Divider>
          <TagModule {...props.tag} />
        </div>
        <div className="gamePage__body__info__content">
          <Divider orientation="left">介绍</Divider>
          <p>{props.basic.info}</p>
        </div>
      </div>
    </div>
  </div>
)

export default GamePage;
