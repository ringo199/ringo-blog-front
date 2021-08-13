import { IRouterOptionArray } from '../interface/irouter'
import Home from '../pages/home'
import FirstNote from '../pages/notes/firstNote'
import FirstDemo from '../pages/games/game'
import FirstCode from '../pages/codes/firstCode'

const routerConfig: IRouterOptionArray = [
  {
    path: '/',
    name: '首页',
    exact: true,
    component: Home
  },
  {
    path: '/note',
    name: '笔记',
    children: [
      {
        path: '/note/firstNote',
        name: '第一个note',
        component: FirstNote
      }
    ]
  },
  {
    path: '/games',
    name: '游戏',
    children: [
      {
        path: '/games/game',
        name: '第一个demo',
        component: FirstDemo
      }
    ]
  },
  {
    path: '/code',
    name: '代码',
    children: [
      {
        path: '/code/firstCode',
        name: '第一个code',
        component: FirstCode
      }
    ]
  }
]

export default routerConfig