import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home';
import Mac from '@/components/Mac/Mac';

//macbook page
import MacBook from '@/components/MacBook/MacBookHome';
import MacBookMain from '@/components/MacBook/MacBookMain';
import MacBookDesign from '@/components/MacBook/Design';
import MacBookWireless from '@/components/MacBook/Wireless';
import MacBookMacOS from '@/components/MacBook/macOS';
import MacBookTechSpecs from '@/components/MacBook/TechSpecs.vue';
import MacBookBuy from '@/components/MacBook/Buy';


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
        { path: '', component: MacBookMain },
        { path: 'design', component: MacBookDesign },
        { path: 'wireless', component: MacBookWireless },
        { path: 'macOS', component: MacBookMacOS },
        { path: 'techspecs', component: MacBookTechSpecs },
        { path: 'buy', component: MacBookBuy }
      ]
    }
  ],
  mode: 'history'
})
