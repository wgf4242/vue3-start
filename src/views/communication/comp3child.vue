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
const value = ref("")
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
const emits = defineEmits(["update:list"])
// 添加操作
const handleAdd = () => {
  const arr = props.list

  arr.push(value.value)
  emits("update:list", arr)
  value.value = ""
}
</script>