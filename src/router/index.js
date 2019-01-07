import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Router)
Vue.use(VueAwesomeSwiper)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'login',
      path: '/login',
      component:resolve => require(['@/components/login/login'],resolve)
    },
    {
      name: 'index',
      path: '/',
      component:resolve => require(['@/components/index/index'],resolve)
    },
    {
      name: 'silkBag',
      path: '/silkBag/:tipid',
      component:resolve => require(['@/components/silkBag/silkBag'],resolve)
    },
    {
      name: 'twoLevel',
      path: '/twoLevel/:tipid',
      component:resolve => require(['@/components/silkBag/twoLevel'],resolve)
    },
    {
      name: 'details',
      path: '/details/:tipid',
      component:resolve => require(['@/components/silkBag/details'],resolve)
    },
    {
      name: 'sleceted',
      path: '/sleceted',
      component:resolve => require(['@/components/sleceted/sleceted'],resolve)
    },
    {
      name: 'slecetedDetails',
      path: '/slecetedDetails/:selectid',
      component:resolve => require(['@/components/sleceted/details'],resolve)
    },
    {
      name: 'mapbox',
      path: '/mapbox/:coordinateX/:coordinateY',
      component:resolve => require(['@/components/common/mapbox'],resolve)
    },
    {
      name: 'hourglass',
      path: '/hourglass',
      component:resolve => require(['@/components/hourglass/hourglass'],resolve)
    }
  ]
})
