import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home';
import Mac from '@/components/Mac/Mac';
import AmazingApps from '@/components/Mac/AmazingApps';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/mac',
      component: Mac
    },
  ],
  mode: 'history'
})
