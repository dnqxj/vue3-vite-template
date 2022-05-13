/*
 * @Author: He Peng
 * @Date: 2022-05-13 16:30:20
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 16:33:04
 * @Descripttion: 
 */
enum status {
  'success',
  'error'
}

export interface JSONResponse {
  status: status,
  message?: string,
}

export interface GeneralData<T extends any> {
  total: number,
  list: T[]
}
