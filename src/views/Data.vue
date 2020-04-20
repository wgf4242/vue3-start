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
    <button @click="add">add</button>

    <hr />
    <div>
        <p>ctx a: {{a}}</p>
        <button @click="update">update</button>
    </div>
  </div>
</template>

<script>
import { reactive, computed, ref, watch, getCurrentInstance } from "vue";
export default {
  name: "App",
  components: {
    // HelloWorld
  },

  setup() {
    const { ctx } = getCurrentInstance();
    console.log(ctx.$router.currentRoute.value);
    const a = computed(() => ctx.$store.state.test.a);

    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    });

    function increment() {
      state.count++;
    }

    const x = ref(0);
    const add = () => x.value++;

    watch(
      () => x.value,
      val => {
        console.log(`count is ${val}`);
      }
    );

    const update = () => {
      ctx.$store.commit("setTestA", x);
    };

    return { state, increment, x, add, a, update };
  }
};
</script>

<style>
</style>