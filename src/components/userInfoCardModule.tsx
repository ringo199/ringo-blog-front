import { Avatar, Col, Popover, Row } from 'antd';
import React, { FC } from 'react';
import { IUserState } from '../interface/istate';
import { IUserInfo } from '../interface/iuser';

const Content : FC<IUserInfo> = (props) : JSX.Element => {
  return (
    <>
      <Row>
        <Col>userID:</Col>
        <Col>{props.userID}</Col>
      </Row>
      <Row>
        <Col>username:</Col>
        <Col>{props.username}</Col>
      </Row>
    </>
  )
}

class UserInfoCardModule extends React.Component<IUserState, any> {
  constructor(props: IUserState | Readonly<IUserState>) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.getUserInfo()
  }

  render () {
    return (
      <div className="userInfoCardModule">
        <Popover
          placement="bottomRight"
          content={Content(this.props.user)}
          trigger="hovered"
        >
          <Avatar src={this.props.user.avatar} />
        </Popover>
      </div>
    )
  }
}

export default UserInfoCardModule;
