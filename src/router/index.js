import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:"/card",
    name:"card",
    component:()=>import("@/views/CardView.vue")
  },
  {
    path:"/unlock",
    name:"unlock",
    component:()=>import("@/views/UnLockView.vue")
  },
  {
    path:"/order",
    name:"order",
    component:()=>import("@/views/OrderView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
