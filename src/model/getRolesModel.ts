/*
 * @Author: He Peng
 * @Date: 2022-05-13 16:05:53
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 16:08:12
 * @Descripttion: 路由配置ts类型配置
 */

export interface Meta {
  hidden: boolean
}

export interface Children {
  path: string,
  component: string
}

export interface Route {
  path: string,
  component: string,
  meta: Meta,
  children: Children[]
}

export interface Item {
  key: string,
  name: string,
  description: string,
  routes: Route[]
}

export interface RolesModels {
  total: number,
  item: Item[]
}