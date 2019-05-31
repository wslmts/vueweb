<template>
  <div id="app">
    <h1 @click="change">{{msg}}</h1>
    <HelloWorld>
      <p slot="header">大学排行</p>
      <section slot="main" slot-scope="props">
        欢迎使用vue产品
        <p>{{props.inf.name}} {{props.inf.bu1}} {{props.inf.bu2}}</p>
      </section>
      <template slot="footer">客服：400618</template>
    </HelloWorld>
    <j-button :classNames="classObject" @click.native="clickH" @click-c="clickH"
    id="btn" name="custombtn" type="button" v-bind="$props">确定</j-button>

    <details>
      <summary></summary>
      <note-book></note-book>
    </details>
   
   <city/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import NoteBook from './components/NoteBook'
import City from './components/City'
export default {
  name: 'App',
  custom:'自定义属性更好一些',
  data(){
    return {
      _privateData:'不被跟踪的数据',
      msg:"hahaha",
      params:{name:'abc'},
      classObject: {
        active: true,
        'text-danger': false
      }
    }
  },
  components: {
    HelloWorld,JButton:Button,NoteBook,City
  },
  mounted(){
    console.log('init app',this)
  },
  methods:{
    change(){
      console.log(123,this.$data._privateData)
      console.log(123,this.$options.custom)
      this.msg='welcome to vue'
    },
    clickH(msg){
      alert(msg)
    }
  }
}
</script>
 
