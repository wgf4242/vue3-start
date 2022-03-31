<template>
  <!-- 父组件 -->
  <ul class="parent list-group">
    <li v-for="i in list" :key="i" class="list-group-item">{{ i }}</li>
  </ul>
  <!-- 子组件 -->
  <child-components v-model:list="list"></child-components>
</template>

<script setup>
import { ref } from "vue"
import ChildComponents from "./comp3child.vue"
const list = ref(["JavaScript", "HTML", "CSS"])
</script>
