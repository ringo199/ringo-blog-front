import { IResp, IRespRow, IRespRows } from "../interface/iajax";

export class RespBody<T> implements IResp<T> {
  public code!: number;
  public message!: string;
  public data!: T;

  constructor (res : RespBody<T>) {
    this.code = res.code
    this.message = res.message
    this.data = res.data
  }
}

export class RespRowsBody<T> implements IRespRows<T> {
  public code!: number;
  public message!: string;
  public data: IRespRow<T>;

  constructor (res : RespRowsBody<T>) {
    this.code = res.code
    this.message = res.message
    this.data = res.data
  }
}
