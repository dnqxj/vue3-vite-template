/*
 * @Author: He Peng
 * @Date: 2022-05-12 10:38:14
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 17:08:40
 * @Descripttion: 
 */
import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user:any) {
  const repositories: any = ref([])
  const getUserRepositories = async () => {
    const res = await fetchUserRepositories(user.value)
    if(res?.status) {
      const data = res.data
      repositories.value = data.list
    }
  }

  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}