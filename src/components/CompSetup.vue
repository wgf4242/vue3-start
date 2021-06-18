<template>
  <div :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</div>

  <div>{{ counter }}</div>
  <div>{{ doubleCounter }}</div>

  <!-- 新增待办 -->
  <input type="text" v-model="todoName" @keydown.enter="addTodo(newTodo(todoName))" />

  <!-- 待办事项列表 -->
  <div v-for="item in items" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineComponent, defineProps } from "vue";
import type { PropType } from "vue";
import type { Todo, TitleInfo } from "../types";

// 属性声明
defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});

const counter = ref(1);
const doubleCounter = computed(() => counter.value * 2);

const items = ref([] as Todo[]);
items.value.push({
  id: 1,
  name: "vue3",
  completed: false,
});

const todoName = ref("");


const newTodo = (todoName: string): Todo => {
  return {
    id: items.value.length + 1,
    name: todoName,
    completed: false,
  };
};
const addTodo = (todo: Todo): void => {
  items.value.push(todo);
  todoName.value = "";
};

</script>
