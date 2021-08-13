import React from 'react'
import { Route } from 'react-router'
import routerConfig from './config';
import { IRouterOptionArray } from "../interface/irouter";

const foreachRouterConfig = (config: IRouterOptionArray) => {
  return (
    config.map((item) => {
      if (!item.children)
      {
        return <Route {...(item.exact ? { exact: true } : {})} key={item.path} path={item.path} component={item.component} />
      }
      else
      {
        return (
          <Route key={item.path} path={item.path} {...(item.component ? { component: item.component } : {})}>
            {foreachRouterConfig(item.children)}
          </Route>
        )
      }
    })
  )
}

class Routes extends React.Component<any, any> {
  public render() {
    return (
      <React.Fragment>
        {foreachRouterConfig(routerConfig)}
      </React.Fragment>
    )
  }
}

export default Routes
