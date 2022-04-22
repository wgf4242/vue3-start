<template>
  <h1>AsyncComp</h1>
    <img :src="img">
</template>

<script>
export default {
  setup() {
    const img = 'https://dummyimage.com/600x900&text=AsyncComp'

    return { img }
  }
}
</script>
