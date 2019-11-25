/*
 * @Author: 潘金红
 * @Date: 2019-11-06 19:44:45
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-15 18:08:48
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/Index'
import SearchPage from '@/pages/SearchPage'
import PlayPage from '@/pages/PlayPage'
import TvPage from '@/pages/TvPage'
import FilmPage from '@/pages/FilmPage'
import DmPage from '@/pages/DmPage'
import ZyPage from '@/pages/ZyPage'
import JlPage from '@/pages/JlPage'
import PersonalPage from '@/pages/PersonalPage'
import SmallVideoPage from '@/pages/SmallVideoPage'
import VipVideoPage from '@/pages/VipVideoPage'
import CollectionPage from '@/pages/CollectionPage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ViewhistoryPage from '@/pages/ViewhistoryPage'
import XiupassPage from '@/pages/XiupassPage'
import AllClassifyPage from '@/pages/AllClassifyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: SearchPage,
    },
    {
      path: '/PlayPage/:id',
      name: 'PlayPage',
      component: PlayPage,
      props:true
    },
    {
      path: '/TvPage',
      name: 'TvPage',
      component: TvPage
    },
    {
      path: '/FilmPage',
      name: 'FilmPage',
      component: FilmPage,
    },
    {
      path: '/ZyPage',
      name: 'ZyPage',
      component: ZyPage,
    },
    {
      path: '/DmPage',
      name: 'DmPage',
      component: DmPage,
    },
    {
      path: '/JlPage',
      name: 'JlPage',
      component: JlPage,
    },
    {
      path: '/PersonalPage',
      name: 'PersonalPage',
      component: PersonalPage,
    },
    {
      path: '/SmallVideoPage',
      name: 'SmallVideoPage',
      component: SmallVideoPage,
    },
    {
      path: '/VipVideoPage',
      name: 'VipVideoPage',
      component: VipVideoPage,
    },
    {
      path:"/CollectionPage",
      name:"CollectionPage",
      component:CollectionPage
    },
    {
      path:"/LoginPage",
      name:"LoginPage",
      component:LoginPage
    },
    {
      path:"/RegisterPage",
      name:"RegisterPage",
      component:RegisterPage
    },
    {
      path:"/ViewhistoryPage",
      name:"ViewhistoryPage",
      component:ViewhistoryPage
    },
    {
      path:"/XiupassPage",
      name:"XiupassPage",
      component:XiupassPage
    },
    {
      path:"/AllClassifyPage/:type",
      name:"AllClassifyPage",
      component:AllClassifyPage,
      props:true
    },
  ]
})
