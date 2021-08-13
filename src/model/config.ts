import { IGlobal, IMenu, IMessage } from '../interface/iconfig'

export class Menu implements IMenu {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (args ?: IMenu) {
  }
}

export class Global implements IGlobal {
  public message: Array<IMessage> = [];

  constructor (args ?: IGlobal) {
    this.message = []
  }
}

export class Message implements IMessage {
  public type!: string;
  public content!: string;
  public duration!: number;

  constructor (args ?: IMessage) {
    this.type = args?.type || ''
    this.content = args?.content || ''
    this.duration = args?.duration || 0
  }
}

export class ErrorMessage extends Message {
  constructor (content : string) {
    super();
    this.type = 'error'
    this.content = content || ''
    this.duration = 3
  }
}
