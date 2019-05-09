<template>
  <button :class="className">
    <slot>sure</slot>
  </button>
</template>
<script>
export default {
  props:['className']
}
</script>
