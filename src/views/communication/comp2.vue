<template>
  <!-- 父组件 -->
  <ul class="parent list-group">
    <li v-for="i in list" :key="i" class="list-group-item">{{ i }}</li>
  </ul>
  <!-- 子组件 -->
  <child-components @add="handleAdd"></child-components>
</template>

<script setup>
import { ref } from "vue"
import ChildComponents from "./comp2child.vue"

const list = ref(["JavaScript", "HTML", "CSS"])
// add 触发后的事件处理函数
const handleAdd = value => {
  list.value.push(value)
}
</script>