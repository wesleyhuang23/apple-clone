import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home';
import Mac from '@/components/Mac/Mac';

//macbook page
import MacBook from '@/components/MacBook/MacBookHome';
import MacBookDesign from '@/components/MacBook/Design';
import MacBookMain from '@/components/MacBook/MacBookMain';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/mac',
      component: Mac,
    },
    {
      path: '/macbook',
      component: MacBook,
      children: [
        {path: '', component: MacBookMain},
        {path: 'design', component: MacBookDesign}
      ]
    }
  ],
  mode: 'history'
})
