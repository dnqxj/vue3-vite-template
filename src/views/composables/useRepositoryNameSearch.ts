/*
 * @Author: He Peng
 * @Date: 2022-05-12 10:42:25
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-12 10:51:49
 * @Descripttion: 将逻辑关注点放到组合式函数中
 */
import { ref, computed, Ref } from 'vue'
import { ArticleModel } from '@/model/articleModel'
export default function useRepositoryNameSearch(repositories: any) {
  const searchQuery = ref('')
  const repositoriesMatchingSearchQuery = computed(() => {
    return repositories.value.filter((repository: { name: string | string[] }) => {
      return repository.name.includes(searchQuery.value)
    })
  })

  return {
    searchQuery,
    repositoriesMatchingSearchQuery
  }
}