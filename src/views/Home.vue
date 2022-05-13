<!--
 * @Author: He Peng
 * @Date: 2022-05-12 08:52:52
 * @LastEditors: He Peng
 * @LastEditTime: 2022-05-13 17:16:54
 * @Descripttion: 
-->
<template>
  <div class="container">
    <div>组合式API演示</div>
    <input type="text" v-model="searchQuery" placeholder="筛选" />
    <ul>
      <li v-for="(item, key) in repositories" :key="key">{{ item.name }}</li>
    </ul>
  </div>
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
    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories)

    return {
      // 因为我们并不关心未经过滤的仓库
      // 我们可以在 repositories` 名称下暴露过滤后的结果
      repositories: repositoriesMatchingSearchQuery,
      getUserRepositories,
      searchQuery
    }
  }
})
</script>
<style>
.container {
  width: 100px;
  margin: auto;
}
</style>
