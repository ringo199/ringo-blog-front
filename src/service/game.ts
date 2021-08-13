import { GamePageConfig } from "../model/game"
import { RespBody } from '../model/index'
import fetch from 'isomorphic-fetch'
import { Config } from "../constant/config"
import { GameAPI } from "../api/game"

export const service = {
  getGamePageConfig: async () : Promise<RespBody<GamePageConfig>> => {
    const res = await fetch(Config.baseUrl + GameAPI.API_GET_GAME_INFO)

    const data = await res.json() as RespBody<GamePageConfig>

    return new RespBody<GamePageConfig>(data)
  }
}
