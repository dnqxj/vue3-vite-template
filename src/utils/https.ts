/*
 * @Description: axios 封装网络请求，使用axios-mapper 让请求直接返回model。用于ts类型
 * @Author: ZY
 * @Date: 2020-12-28 14:45:32
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 17:08:08
 */

// https://www.npmjs.com/package/axios-mapper
// import { useStore } from '@/store'
import HttpClient, { HttpClientConfig } from 'axios-mapper'

const baseURL =  process.env.VITE_BASE_API
const timeout = 60000

const https = (hasToken: Boolean = true) => {
  const config: HttpClientConfig = {
    baseURL:baseURL,
    timeout: timeout,
    headers: {
      token: hasToken ? 'testcode' : ''
    }
  }
  return new HttpClient(config)
}

export default https
