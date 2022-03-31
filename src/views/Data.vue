<template>
  <div>
    <h1>Reactive</h1>

    <div>count: {{ state.count }}</div>

    <div>double: {{ state.double }}</div>
    <br />
    <button @click="increment">inc</button>
    <hr />

    <h1>Ref</h1>
    <div>x: {{ x }}</div>
    <button @click="add">add</button>

    <hr />
    <div>
      <p>store user-name: {{ name }}</p>
      <button @click="update">update</button>
    </div>
  </div>
</template>

<script>
import { reactive, computed, ref, watch, getCurrentInstance } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCountStore } from "../store";
export default {
  name: "App",
  components: {
    // HelloWorld
  },

  setup() {
    const route = useRoute()
    const router = useRouter()

    console.log(router.currentRoute.value);
    const store = useCountStore();
    const name = computed(() => store.user.name);

    const state = reactive({
      count: computed(() => store.count),
      double: computed(() => store.count * 2)
    });

    function increment() {
      store.count++;
    }

    const x = ref(0);
    const add = () => x.value++;

    watch(
      () => x.value,
      val => { console.log(`watching x count is ${val}`); }
    );

    const update = () => {
      // ctx.$store.commit("setTestA", x);
      store.$patch({"user": { name: store.user.name + "a" }});
    };

    return { state, increment, x, add, name, update };
  }
};
</script>

<style>
</style>