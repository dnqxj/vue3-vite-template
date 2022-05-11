<template>
  <div>
    <input type="text" v-model="message">
  </div>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    let message = ref('home page')
    return {
      message
    }
  }
})
</script>