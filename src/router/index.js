import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Main from '@/views/page_comm/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: { name: 'main' },
      children:[
        {
          path: '/main',
          name: 'main',
          component: Main
        }
      ]
    }
  ]
})
