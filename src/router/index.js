import Vue from 'vue'
import VueRouter from 'vue-router'
import SimpleGame from '../views/SimpleGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/SimpleGame',
    name: 'SimpleGame',
    component: SimpleGame
  }
]

const router = new VueRouter({
  routes
})

export default router
