import React from 'react';
import { Menu } from 'antd'
import { IRouterOptionArray } from "../interface/irouter";
import { ILayoutState, IUserState } from "../interface/istate";
import routerConfig from "../router/config";
import { connect } from 'react-redux';
import { mapStateToProps } from "../store/map2props/state/layout"
import { mapDispatchToProps } from "../store/map2props/dispatch/layout"
import MessageModule from '../components/messageModule'
import UserInfoCardModule from '../components/userInfoCardModule'
import { withRouter } from 'react-router-dom';
import './index.css'

const { SubMenu } = Menu;

class Layout extends React.Component<ILayoutState, any> {

  constructor (props: ILayoutState | Readonly<ILayoutState>) {
    super(props)

    this.state = {}

    this.onClick = this.onClick.bind(this)
  }

  private onClick(opt: any) {
    this.props.history.push(opt.key)
  }

  private initMenuConfig = (config: IRouterOptionArray) : JSX.Element[] => {
    return (
      config.map((item) => {
        if (!item.children)
        {
          return (
            <Menu.Item key={item.path}>
              {item.name}
            </Menu.Item>
          )
        }
        else
        {
          return (
            <SubMenu key={item.path} title={item.name}>
              {this.initMenuConfig(item.children)}
            </SubMenu>
          )
        }
      })
    )
  }

  render () {
    return (
      <div className="layout">
        <div className="layout__title">
          简简单单写个blog
        </div>
        <div className="layout__userInfo">
          <UserInfoCardModule
            {...this.props as unknown as IUserState}
          />
        </div>
        <div className="layout__body">
          <div className="layout__body__menu">
            <Menu
              defaultSelectedKeys={['/']}
              defaultOpenKeys={['/']}
              mode='inline'
              onClick={this.onClick}
            >
              {this.initMenuConfig(routerConfig)}
            </Menu>
          </div>
          <div className="layout__body__content">
            <MessageModule {...this.props.global} />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))
