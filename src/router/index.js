import Vue from 'vue'
import VueRouter from 'vue-router'
import SimpleGame from '../views/SimpleGame.vue'
import HighLow from '../views/HighLow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/SimpleGame'
  },
  {
    path: '/SimpleGame',
    name: 'SimpleGame',
    component: SimpleGame
  },
  {
    path: '/HighLow',
    name: 'HighLow',
    component: HighLow
  }
]

const router = new VueRouter({
  routes
})

export default router
