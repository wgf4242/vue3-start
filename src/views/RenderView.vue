<!-- 优先级 template>render -->

<template>
  <div>
    Template Render
    <Child />
  </div>
</template>

<script>
import { h } from "vue"
const Child = {
  render() {
    return h("div", [
      h("h1", "Child Compoennt"),
    ])
  }
}

export default {
  components: {Child},
  render() {
    return [
      h("div","Render Funcion Template") ,
      h(Child),
      ]
  }

}
</script>
