<template>
  <section>
    <header>
      <slot name="header">this is header</slot>
    </header>
    <main>
       <slot name="main" :inf="props">{{props.name}}</slot>
    </main>
    <footer>
       <slot name="footer">this is footer</slot>
    </footer>
    <div>
      <h3>flex</h3>
      <div class="container">
        <div>align-content用于多行内容居中，一行显示时不生效；align-items是单行的</div>
        <div></div>
        <div></div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       props:{
         name:'北京',
         bu1:'海淀',
         bu2:'清华大学'
       }
    }
  },
  mounted(){
    console.log('init',this)
  }
}
</script>
<style>
.container{
  width: 500px;
  height:1000px;
  border:1px dashed blueviolet;
  display: flex;
  justify-content: baseline;
  justify-items: flex-end;
  align-items: center;
  /* align-content: center;
  flex-wrap: wrap; */
}
.container>div{
 width: 200px;
}
.container>div:nth-child(1){
  background: green;
  height:200px;
}
.container>div:nth-child(2){
  background: red;
  height:300px;
}
.container>div:nth-child(3){
  background: goldenrod;
  height:100px;
}
</style>