/*
 * @Author: He Peng
 * @Date: 2022-05-12 09:35:54
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-12 11:26:44
 * @Descripttion: 
 */
import request from '@/utils/request'

export const fetchUserRepositories = (params: any) => {
  return request({
    url: '/list',
    method: 'get',
    params
  })
}