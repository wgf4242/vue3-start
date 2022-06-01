<template>

</template>

<script>
export default {
  // https://vuejs.org/api/composition-api-setup.html#setup-context
  setup(props, context) {
    // setup(props, { attrs, slots, emit, expose }) {

      // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
  }
}
</script>

<script setup>
import { useSlots, useAttrs } from 'vue'

const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])

const a = 1
const b = ref(2)

defineExpose({a, b})

const slots = useSlots()
const attrs = useAttrs()

</script>



<style scoped>

</style>
