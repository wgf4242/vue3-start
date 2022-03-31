<template>
  <h1>Fade Vue Router Transitions</h1>
  <router-link to="/router-transition1/view1">view1</router-link>|
  <router-link to="/router-transition1/view2">view2</router-link>|
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

