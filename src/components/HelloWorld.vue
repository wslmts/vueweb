<template>
  <div>
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
  </section>
  </div>
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
