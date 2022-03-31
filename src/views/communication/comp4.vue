<template>
  <ul class="parent list-group">
    <li v-for="i in childRefs?.list" :key="i" class="list-group-item">
      {{ i }}
    </li>
  </ul>
  <!-- 子组件 ref的值与<script>中的保持一致 -->
  <child-components ref="childRefs"></child-components>
  <!-- 父组件 -->
</template>

<script setup>
import { ref } from "vue"
import ChildComponents from "./comp4child.vue"
const childRefs = ref(null)
</script>
