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

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { Todo, TitleInfo } from "../types";

export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  data() {
    return {
      items: [] as Todo[],
      counter: 1,
      todoName: ''
    };
  },
  created() {
    this.items.push({
      id: 1,
      name: "vue3",
      completed: false,
    });
  },
  computed: {
    doubleCounter(): number {
      return this.counter * 2;
    },
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        id: this.items.length + 1,
        name: todoName,
        completed: false,
      };
    },
    addTodo(todo: Todo): void {
      this.items.push(todo);
      this.todoName = "";
    },
  },
});
</script>

<style lang=""></style>
