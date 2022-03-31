<template>
  <div id="app">
    <div id="nav">
      <div class="row">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/data">Data</router-link>|
        <router-link to="/RenderView">RenderView</router-link>|
        <router-link to="/Communication">Communication</router-link>|
        <router-link to="/UseJsx">UseJsx</router-link>|
      </div>
      <div class="row">
        <router-link to="/router-transition1">router-transition1</router-link>|
        <router-link to="/router-transition2">router-transition2</router-link>|
        <router-link to="/router-transition3">router-transition3</router-link>|
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
}
</style>
