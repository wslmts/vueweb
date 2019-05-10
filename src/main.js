// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import NoteBook from './components/NoteBook'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
//另外一种渲染方式
// new Vue({
//   el: '#app',
//   render:h=>{
//     return h(NoteBook)
//   }
// })
