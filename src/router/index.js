import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../../public/test.vue'
Vue.use(VueRouter)

  const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/test',component:Test}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
