<template>
  <!-- 子组件 -->
  <child-components :list="list"></child-components>
  <!-- 父组件 -->
  <div class="child-wrap input-group">
    <input v-model="value" type="text" class="form-control" placeholder="请输入" />
    <div class="input-group-append">
      <button class="btn btn-primary" type="button" @click="handleAdd">添加</button>
    </div>
  </div>
</template>

<script lang="jsx">
const ChildComponents = {
  // template: "<div>123</div>",
  // use tempate need vite.config.js alias -- vue: "vue/dist/vue.esm-bundler.js",
  props: {
    list: {
      type: Array,
      default: () => [1, 2, 3],
    },
  },
  setup(props) {
    //      return () => (
    //    <>
    //      <button onClick={event => changName(event, "欢迎关注公众号~WEB前端李志杰~")}>xx</button>
    //    </>
    //  );


    // <li class="list-group-item" v-for="i in props.list" :key="i">{{ i }}</li>
    return () => {
      return <ul class="parent list-group">
        {props.list.map(e => <li class="list-group-item" key={e}>{e}</li>)}
      </ul>
    }
  }
}
</script>

<script setup lang="jsx">
import { ref } from "vue"
const list = ref(["JavaScript", "HTML", "CSS"])
const value = ref("")
// add 触发后的事件处理函数
const handleAdd = () => {
  list.value.push(value.value)
  value.value = ""
}
</script>
