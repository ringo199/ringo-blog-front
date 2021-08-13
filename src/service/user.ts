import { UserInfo, Login, Token } from "../model/user"
import { RespBody } from '../model/index'
import fetch from 'isomorphic-fetch'
import { Config } from "../constant/config"
import { UserAPI } from "../api/user"

export const service = {
  login: async (loginInfo: Login) : Promise<Token> => {
    const res = await fetch(Config.baseUrl + UserAPI.API_LOGIN, {
      method: 'post',
      body: loginInfo.toString()
    })

    const data = await res.json() as Token

    return new Token(data)
  },
  getUserInfo: async () : Promise<RespBody<UserInfo>> => {
    const res = await fetch(Config.baseUrl + UserAPI.API_GET_USER_INFO)

    const data = await res.json() as RespBody<UserInfo>

    return new RespBody<UserInfo>(data)
  }
}
