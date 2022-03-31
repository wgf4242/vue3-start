<template>
  <div>
    Template Render
    <SA />
  </div>
</template>

<script>
import { h } from "vue"
const SA = {
  render() {
    return h("div", [
      h("h1", "SA Compoennt"),
    ])
  }
}

export default {
  components: {SA},
  render() {
    return [
      h("div","Render Funcion Template") ,
      h(SA),
      ]
  }

}
</script>
