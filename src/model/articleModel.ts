/*
 * @Author: He Peng
 * @Date: 2022-05-12 10:04:31
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-12 10:43:36
 * @Descripttion: ArticleModel types
 */
export interface ArticleModel {
  id: number
  name: string,
  status: string
  title: string
  abstractContent: string
  fullContent: string
  sourceURL: string
  imageURL: string
  timestamp: number
  platforms: string[]
  disableComment: boolean
  importance: number
  author: string
  reviewer: string
  type: string
  pageviews: number
}
