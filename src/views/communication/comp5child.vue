<template>
  <ul class="parent list-group">
    <li v-for="i in list" :key="i" class="list-group-item">{{ i }}</li>
  </ul>
</template>

<script setup>
import { inject } from "vue"
// 接受父组件提供的数据
const list = inject("list")
</script>