<template>
   <!-- https://www.bilibili.com/video/BV1P44y1P7PE?p=3 -->
  <img :src="img" @load="done" class="image">
  <div ref="target">
    <AsyncCompVue v-if="show" />
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineAsyncComponent } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// 异步组件加载
const AsyncCompVue = defineAsyncComponent(() =>
  import("../components/AsyncComp.vue")
)
const img = 'https://dummyimage.com/600x1200/'
const show = ref(false)
const target = ref(null)

onMounted(() => {
  console.log(target);

  // Q. 可以用Mutation Observer来 监听元素加载完毕代替setTimeout
  setTimeout(() => {
    // 判断是否进入到视口区域 如果进来了就变成true
    useIntersectionObserver(
      target, ([{ isIntersecting }]) => {
        console.log(isIntersecting);
        if (isIntersecting)
          show.value = true;
      },
    )
  }, 400);
})

const done = () => console.log('img done'); // 2.可以在这里监听代替setTimeout
</script>