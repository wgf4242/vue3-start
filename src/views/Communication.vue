<template>
  <!-- https://mp.weixin.qq.com/s/LcAaR9ESBbCMyd0dzmQBSw -->
  <div>
    <div>Comp1: props</div>
    <comp1></comp1>
    <hr>
    <div>Comp2: emit</div>
    <comp2></comp2>
    <hr>
    <div>Comp3: v-model</div>
    <comp3></comp3>
    <hr>
    <div>Comp4: ref</div>
    <comp4></comp4>
    <hr>
    <div>Comp5: provide/inject</div>
    <comp5></comp5>
    <div style="color: red;">Comp6: $attrs - not implement</div>

    <h3>常用方式以下8种</h3>
    <ul>
      <li>props</li>
      <li>$emit/ <span class="delete">$on</span></li>
      <li><span class="delete">X$children</span>/$parent </li>
      <li>$attrs/ <span class="delete">$listeners</span></li>
      <li>ref</li>
      <li>$root</li>
      <li>eventbus</li>
      <li>vuex/pinia</li>
    </ul>
    <ul>
      <li>父子组件</li>
      <li>props/$emit/$parent/ref/$attrs</li>
    </ul>
    <ul>
      <li>兄弟组件</li>
      <li>$parent/$root/eventbus/vuex</li>
    </ul>
    <ul>
      <li>跨层级关第</li>
      <li>eventbus/vuex/provide+inject</li>
    </ul>
  </div>
</template>

<script setup>
import comp1 from "./communication/comp1.vue"
import comp2 from "./communication/comp2.vue"
import comp3 from "./communication/comp3.vue"
import comp4 from "./communication/comp4.vue"
import comp5 from "./communication/comp5.vue"
</script>

<style>
.delete {
  text-decoration: line-through;
}
</style>