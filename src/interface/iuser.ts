
export interface IUserInfo {
  userID: string,
  username: string,
  avatar: string
}

export interface IRegister {
  username: string,
  password: string,
  confirmPassword: string
}

export interface ILogin {
  username: string,
  password: string
}

export interface ILogout {
}

export interface IToken {
  token: string
}
