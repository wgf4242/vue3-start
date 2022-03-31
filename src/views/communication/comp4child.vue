<template>
  <div class="child-wrap input-group">
    <input
      v-model="value"
      type="text"
      class="form-control"
      placeholder="请输入"
    />
    <div class="input-group-append">
      <button class="btn btn-primary" type="button" @click="handleAdd">
        添加
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
const list = ref(["JavaScript", "HTML", "CSS"])
const value = ref("")
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ""
}

defineExpose({ list })
</script>
