<template>
    <ul>
      <li v-for="v of list" :key="v.id" @click="handleExpand(v)">{{v.name}}--{{v.expand}}
      <template  v-if="v.children">
      <div v-show="v.expand">
         <tree-node :list="v.children"></tree-node>
      </div>
      </template>
      </li>
    </ul> 
</template>
<script>
export default {
  name:'TreeNode',
  props:['list'],
  data(){
    return {
      
    }
  },
  methods:{
   handleExpand(v){
     this.$set(v, 'expand', !v.expand);
   }
  }
}
</script>
<style>
ul{
 list-style: none;
}
</style>


