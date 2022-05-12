<template>
  <input type="text" v-model="searchQuery" placeholder="筛选">
  <div>组合式API</div>
  <ul>
    <li v-for="(item, key) in repositories" :key="key">{{ item.name }}</li>
  </ul>
</template>
<script lang="ts">
import { ref, defineComponent, toRefs } from 'vue'
import useUserRepositories from './composables/useUserRepositories'
import useRepositoryNameSearch from './composables/useRepositoryNameSearch'

export default defineComponent({
  // 将页面拆分成了小组件
  //  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList }, 
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 外部user改变时，更新数据
    // 使用 `toRefs` 创建对 `props` 中的 `user` property 的响应式引用
    const { user } = toRefs(props)

    // 获取逻辑，放到了组合函数 `useUserRepositories` 中
    const { repositories, getUserRepositories } = useUserRepositories(user)
    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    return {
      // 因为我们并不关心未经过滤的仓库
      // 我们可以在 repositories` 名称下暴露过滤后的结果
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery,
    }
  }
})
</script>