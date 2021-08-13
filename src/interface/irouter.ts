import { RouteComponentProps } from "react-router-dom";

export interface IRouterOption {
  path: string,
  name: string,
  exact?: boolean,
  component?: any,
  children?: IRouterOptionArray
}

export interface IRouterOptionArray extends Array<IRouterOption> {
  [propName: number]: IRouterOption
}

export interface IPageRoute<T> extends RouteComponentProps<T> {}