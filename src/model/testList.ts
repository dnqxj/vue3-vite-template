/*
 * @Author: He Peng
 * @Date: 2022-05-13 16:34:22
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 16:54:56
 * @Descripttion: 测试列表数据type定义
 */

import { GeneralData, JSONResponse } from "./response";

export interface TextList {
  id: number,
  name: string
}

// 测试list返回类型，嵌套了基本返回+data一般返回+列表类型
export interface TestListResponse extends JSONResponse {
  data: GeneralData<TextList>
}