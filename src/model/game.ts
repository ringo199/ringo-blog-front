import { IGamePage, IGameConfig, IGameInfoConfig, IBasicConfig, IFuncConfig, ITagConfig, IVideoConfig } from "../interface/ipage/igamepage"

const resourceRoot = window.location.origin

export class GameInfoConfig implements IGameInfoConfig {
  public dataUrl: string = ''
  public frameworkUrl: string = ''
  public codeUrl: string = ''
  public streamingAssetsUrl: string = ''
  public companyName: string = ''
  public productName: string = ''
  public productVersion: string = ''
  public devicePixelRatio?: number

  constructor (args ?: IGameInfoConfig) {
    this.dataUrl = args?.dataUrl || ''
    this.frameworkUrl = args?.frameworkUrl || ''
    this.codeUrl = args?.codeUrl || ''
    this.streamingAssetsUrl = args?.streamingAssetsUrl || ''
    this.companyName = args?.companyName || ''
    this.productName = args?.productName || ''
    this.productVersion = args?.productVersion || ''
    this.devicePixelRatio = args?.devicePixelRatio
  }
}

export class BasicConfig implements IBasicConfig {
  public title: string = ''
  public info: string = ''

  constructor (args ?: IBasicConfig) {
    this.title = args?.title || ''
    this.info = args?.info || ''
  }
}

export class TagConfig implements ITagConfig {
  public list: string[] = []

  constructor (args ?: ITagConfig) {
    this.list = args?.list || []
  }
}

export class FuncConfig implements IFuncConfig {
  public list: string[] = []

  constructor (args ?: IFuncConfig) {
    this.list = args?.list || []
  }
}

export class VideoConfig implements IVideoConfig {
  public url: string = ''

  constructor (args ?: IVideoConfig) {
    this.url = args?.url || ''
  }
}

export class GameConfig implements IGameConfig {
  public loaderUrl: string = resourceRoot + '/gameLoader.js'
  public info : IGameInfoConfig = new GameInfoConfig()

  constructor (args ?: IGameConfig) {
    this.loaderUrl = args?.loaderUrl || resourceRoot + '/gameLoader.js'
    this.info = new GameInfoConfig(args?.info)
  }
}

export class GamePageConfig implements IGamePage {
  public basic: IBasicConfig = new BasicConfig()
  public tag: ITagConfig = new TagConfig()
  public func: IFuncConfig = new FuncConfig()
  public game: IGameConfig = new GameConfig()
  public video: IVideoConfig = new VideoConfig()

  public GamePageConfig (args ?: IGamePage) {
    this.basic = new BasicConfig(args?.basic)
    this.tag = new TagConfig(args?.tag)
    this.func = new FuncConfig(args?.func)
    this.game = new GameConfig(args?.game)
    this.video = new VideoConfig(args?.video)
  }
}
