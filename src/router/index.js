import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)




/* const constantRoutes = [

]

const asyncRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '',
      icon: '',
    },
    children: [
      {
        path: '',
        component: () => import(''),
        name: '',
        meta: {
          title: '',
        }
      }
    ]
  }
] */










export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout'),
      children: [
        {
          path: '/plotanddesign/plotList',
          name: 'plotList',
           component: () => import('@/view/table'),
        }  
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/view/login')
    },
    {
      path: '*',
      name: 'Development',
      component: () => import('@/components/Development')
    }
    
  ]
})
