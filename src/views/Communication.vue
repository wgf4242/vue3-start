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
  </div>
</template>

<script setup>
import comp1 from "./communication/comp1.vue"
import comp2 from "./communication/comp2.vue"
import comp3 from "./communication/comp3.vue"
import comp4 from "./communication/comp4.vue"
import comp5 from "./communication/comp5.vue"
</script>