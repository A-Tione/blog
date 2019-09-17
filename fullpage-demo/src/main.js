import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // data:{
  //   bgColor: ['#c90','#c09','#09c','#9c0'],
  //   curIndex:0,
  // },
  // methods: {
  //   wheelEvent(e){
  //     if (e.deltaY>0){
  //       if(this.curIndex === this){
  //         this.curIndex +=1
  //       }
  //     }
  //   }
  // },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
