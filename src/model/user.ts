import qs from 'querystring'

import { ILogin, IRegister, IUserInfo, IToken } from '../interface/iuser'

export class UserInfo implements IUserInfo {
  public userID: string = ''
  public username: string = ''
  public avatar: string = ''

  constructor (args ?: IUserInfo) {
    this.userID = args?.userID || ''
    this.username = args?.username || ''
    this.avatar = args?.avatar || ''
  }
}

export class Register implements IRegister {
  public username: string = ''
  public password: string = ''
  public confirmPassword: string = ''

  constructor (args ?: IRegister) {
    this.username = args?.username || ''
    this.password = args?.password || ''
    this.confirmPassword = args?.confirmPassword || ''
  }
}

export class Login implements ILogin {
  public username: string = ''
  public password: string = ''

  constructor (args ?: ILogin) {
    this.username = args?.username || ''
    this.password = args?.password || ''
  }

  public toString () : string {
    return qs.stringify({
      username: this.username,
      password: this.password
    })
  }
}

export class Token implements IToken {
  public token: string = ''

  constructor (args ?: IToken) {
    this.token = args?.token || ''
  }
}
