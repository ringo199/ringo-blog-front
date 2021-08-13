import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from "../store/map2props/state/user"
import { mapDispatchToProps } from "../store/map2props/dispatch/user"
import { IUserState } from "../interface/istate";

class Home extends React.Component<IUserState, any> {
  constructor(props: IUserState | Readonly<IUserState>) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="home" style={{ height: "100%" }}>
      TODO: <br />
      1. 前端 <br />
      &nbsp;&nbsp;1. router动态加载 <br />
      &nbsp;&nbsp;2. 个人信息页功能完善 包括鉴权 上传 <br />
      &nbsp;&nbsp;3. 功能按钮实现 <br />
      2. 后端 <br />
      &nbsp;&nbsp;1. 数据字典 <br />
      &nbsp;&nbsp;2. 个人信息接口 <br />
      &nbsp;&nbsp;&nbsp;&nbsp;1. 鉴权 <br />
      &nbsp;&nbsp;&nbsp;&nbsp;2. 上传 <br />
      &nbsp;&nbsp;3. 游戏保存接口 <br />
      &nbsp;&nbsp;&nbsp;&nbsp;1. 解析h5文件压缩包 <br />
      &nbsp;&nbsp;&nbsp;&nbsp;2. 保存文件至相应路径 并将信息用hash对应并存储到数据表 <br />
      &nbsp;&nbsp;4. 其他 <br />
      &nbsp;&nbsp;&nbsp;&nbsp;1. 加载菜单数据 <br />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
