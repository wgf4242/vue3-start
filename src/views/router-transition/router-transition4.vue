<template>
  <h1>Combining Vue Router Transitions</h1>
  <router-link to="/router-transition4/view1">view1</router-link>|
  <router-link to="/router-transition4/view2">view2</router-link>|
  <router-view v-slot="{ Component }">
    <transition name="scale-slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>


<style scoped>
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}


.scale-slide-enter-from {
  left: -100%;
}


.scale-slide-enter-to {
  left: 0%;
}


.scale-slide-leave-from {
  transform: scale(1);
}


.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
