<template>
    <ul>
      <li v-for="v of list" :key="v.id" @click="v.expand=!v.expand">{{v.name}}--{{v.expand}}
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

  }
}
</script>
<style>
ul{
 list-style: none;
}
</style>


