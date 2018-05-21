import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import App from './App.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return desired position
    // if(to.path != '/Menu')
    //   return  {selector: '.btn'}
  }
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   next();
// })
// router.afterEach((to, from) => {
//   console.log(to)
// })
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

