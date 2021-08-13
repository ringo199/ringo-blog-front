
export interface IResp <T> {
  code: number,
  message: string,
  data: T
}

export interface IRespRow <T> {
  rows: Array<T>,
  total: number,
  page: number,
  pageSize: number
}

export interface IRespRows <T> {
  code: number,
  message: string,
  data: IRespRow<T>
}
