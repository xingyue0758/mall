import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
//   /*  默认get，还有post */
// }).then(
//   res => {
//     console.log(res);
//   }
// )
/* axios(
  {
    url: 'http://123.207.32.32:8000/home/data',
    params: {
      type: 'pop',
      page: 1,
    }
  }
).then(
  res => {
    console.log(res);
  }
) */
// const instance = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance({
//   url: '/home/multidata'
// }).then(
//   res => {
//     console.log(res);
//   }
// )
// import { request } from './network/request.js'
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })