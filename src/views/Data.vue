<template>
  <div>
    <h1>Reactive</h1>

    <div>count: {{state.count}}</div>

    <div>double: {{state.double}}</div>
    <br />
    <button @click="increment">inc</button>
    <hr />

    <h1>Ref</h1>
    <div>x: {{x}}</div>
  </div>
</template>

<script>
import { reactive, computed, ref } from "vue";
export default {
  name: "App",
  components: {
    // HelloWorld
  },

  setup() {
    const x = ref(0);
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    return { x, state, increment };
  }
};
</script>

<style>
</style>