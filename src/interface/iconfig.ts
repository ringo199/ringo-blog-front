
export interface IMenu {
}

export interface IGlobal {
  message: Array<IMessage>
}

export interface IMessage {
  type: string,
  content: string,
  duration: number
}

export interface IConfig {
  baseUrl: string
}
