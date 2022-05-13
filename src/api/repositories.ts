/*
 * @Author: He Peng
 * @Date: 2022-05-12 09:35:54
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 16:53:21
 * @Descripttion: 
 */
import { TestListResponse } from '@/model/testList'
import https from '@/utils/https'
import { Method } from 'axios-mapper'

export const fetchUserRepositories = (params: any) => {
  return https().request<TestListResponse>('/options/list', Method.GET, params)
}
