/*
 * @Author: He Peng
 * @Date: 2022-05-12 11:21:54
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 16:18:19
 * @Descripttion: 
 */
import { MockMethod } from 'vite-plugin-mock'
let List = {
  url: '/api/options/list', // 注意，这里只能是string格式
  method: 'get',
  response: () => {
    return {
      status: 'success',
      message: '成功',
      data: {
        total: 100,
        list: [
          {
            id: 1,
            name: 'aaa'
          },
          {
            id: 1,
            name: 'bbb'
          },
        ]
      }
    }
  }
}

export default [
  List
] as MockMethod[] // 这里其实就是定义数据格式的，不了解的同学可以参考typescript的官方文档
