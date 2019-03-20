import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import MyPage from '@/components/MyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/myPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '*',
      name: 'Main',
      component: Main
    }
  ]
})
