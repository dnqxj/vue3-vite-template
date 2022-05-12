/*
 * @Author: He Peng
 * @Date: 2022-05-12 10:06:18
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-12 10:06:23
 * @Descripttion: ArticleList model
 */
export interface ArticleList<T> {
  total: number
  items: T[]
}
