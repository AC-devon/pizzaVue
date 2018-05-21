import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/About.vue'
import inAbout1 from './components/inAbout1.vue'
import inAbout2 from './components/inAbout2.vue'

export const routes = [
    {path:'/',components:{
        default:Home,
        'inAbout1':inAbout1,
        'inAbout2':inAbout2
    }},
    {path:'/Menu',component:Menu}, 
    {path:'/Admin',component:Admin, beforeEnter: (to, from, next) => {
      alert('this area is for signed users only')
      next();
    }},
    {path:'/About',component:About,children:[
      {path:'/inAbout1',component:inAbout1},
      {path:'/inAbout2',component:inAbout2},
    ]},
    {path:'*', redirect:'/'}  
  ]
  
  
  // router.beforeEach((to, from, next) => {
  //   console.log(to)
  //   next();
  // })
  // router.afterEach((to, from) => {
  //   console.log(to)
  // })