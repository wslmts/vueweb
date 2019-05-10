<template>
  <button :class="classNames" @click="clickH">
    <slot>sure</slot>
  </button>
</template>
<script>
export default {
  props:['classNames'],
  mounted(){
    console.log('btn',this)
  },
  methods:{
   clickH(){
     this.$emit('click-c','111')
   }
  }
}
</script>
