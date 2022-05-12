/*
 * @Author: He Peng
 * @Date: 2022-05-12 10:38:14
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-12 11:30:20
 * @Descripttion: 
 */
import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user:any) {
  const repositories: any = ref([])
  const getUserRepositories = async () => {
    const res = await fetchUserRepositories(user.value)
    if(res.status) {
      repositories.value = res.data
    }
  }

  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}