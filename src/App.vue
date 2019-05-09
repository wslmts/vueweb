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
    <j-button class="{'border-radius':'5px'}">确定</j-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import './assets/a.css'
export default {
  name: 'App',
  data(){
    return {
      msg:"hahaha"
    }
  },
  components: {
    HelloWorld,JButton:Button
  },
  methods:{
    change(){
      this.msg='welcome to vue'
    }
  }
}
</script>
 
