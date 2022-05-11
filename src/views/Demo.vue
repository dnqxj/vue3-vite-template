<template>
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    let message = ref('demo page')
    return {
      message
    }
  }
})
</script>