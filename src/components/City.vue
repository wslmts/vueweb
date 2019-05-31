<template>
  <div>
    <tree :list="city"></tree>
  </div>
</template>
<script>
import city from '../utils/city'
import Tree from './Tree'
export default {
  data(){
    return {
      city
    }
  },
  created(){
     this.city = this.initSource(this.city)
  },
  components:{Tree},
  methods:{
    initSource(list){
     list.forEach(v=>{
      v.expand=false
      v.children?this.initSource(v.children):''
     })
      return list
    }  
  }
}
</script>
