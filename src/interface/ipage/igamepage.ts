export interface IGamePage {
  basic: IBasicConfig,
  tag: ITagConfig,
  func: IFuncConfig,
  game: IGameConfig,
  video: IVideoConfig
}

export interface ITagConfig {
  list: string[]
}

export interface IFuncConfig {
  list: string[]
}

export interface IVideoConfig {
  url: string
}

export interface IBasicConfig {
  title: string,
  info: string,
}

export interface IGameConfig {
  loaderUrl?: string,
  info: IGameInfoConfig
}

export interface IGameInfoConfig {
  dataUrl: string,
  frameworkUrl: string,
  codeUrl: string,
  streamingAssetsUrl: string,
  companyName: string,
  productName: string,
  productVersion: string,
  devicePixelRatio?: number
}

export interface ILoadProgressConfig {
  progress: number
}
