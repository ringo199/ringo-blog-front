
export enum ActionType {
  LOGIN = 'LOGIN',        // 登录
  LOGOUT = 'LOGOUT',      // 登出
  REGISTER = 'REGISTER',  // 注册

  GET_USER_INFO = 'GET_USER_INFO',     // 获取个人信息
  SET_USER_INFO = 'SET_USER_INFO',     // 设置个人信息

  SHOW_MESSAGE = 'SHOW_MESSAGE',       // 展示消息

  SET_MENU_CONFIG = 'SET_MENU_CONFIG', // 设置菜单配置
  GET_MENU_CONFIG = 'GET_MENU_CONFIG', // 获取菜单配置

  GET_GAME_PAGE_CONFIG = 'GET_GAME_PAGE_CONFIG', // 获取游戏数据
  SET_GAME_PAGE_CONFIG = 'SET_GAME_PAGE_CONFIG', // 初始化游戏页面
  SET_GAME_LOADER = 'SET_GAME_LOADER',           // 设置加载文件路径
  SET_GAME_INFO = 'SET_GAME_INFO',               // 游戏配置
  SET_BASIC_CONFIG = 'SET_BASIC_CONFIG',         // 加载标题及介绍
  SET_VIDEO_CONFIG = 'SET_VIDEO_CONFIG',         // 介绍视频配置
  SET_TAG_CONFIG = 'SET_TAG_CONFIG',             // 设置标签
  SET_FUNC_CONFIG = 'SET_FUNC_CONFIG',           // 设置功能

  POST_ADD_GAME_INFO = 'POST_ADD_GAME_INFO',        // 新增游戏信息
  POST_UPDATE_GAME_INFO = 'POST_UPDATE_GAME_INFO',  // 修改游戏信息
  POST_UPLOAD_GAME = 'POST_UPLOAD_GAME',            // 上传游戏文件
  POST_UPLOAD_VIDEO = 'POST_UPLOAD_VIDEO',          // 上传视频文件
}
