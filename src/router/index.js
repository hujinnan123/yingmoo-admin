import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Layout from '@/layout'


/* 不需要权限的路由 */
const constantRoutes = [
  "page/role/roleList","page/dept/deptList","page/menu/menuList","page/dict/dictList",
  "page/bus/busLineList","page/airport/airportList"
]
/* 需要权限的路由 */
const asyncRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'weather',
        component: ()=> import('@/view/weather')
      },
      {
        path: 'user/userList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '用户管理',
          name: 'userList'
        }
      },
      {
        path: '/role/roleList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '角色管理',
          name: 'userList'
        }
      },
      {
        path: 'dept/deptList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '部门管理',
          name: 'userList'
        }
      },
      {
        path: 'menu/menuList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '菜单管理',
          name: 'userList'
        }
      },
      {
        path: 'dict/dictList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '数据字典',
          name: 'userList'
        }
      },




      {
        path: 'bus/busLineList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '公交路线',
          name: 'userList'
        }
      },
      {
        path: 'airport/airportList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '机场数据',
          name: 'userList'
        }
      },
      {
        path: 'expressway/expresswayList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '高速数据',
          name: 'userList'
        }
      },
      {
        path: 'landmark/landmarkList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '地标数据',
          name: 'userList'
        }
      },
      {
        path: 'trade/tradelist', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '商圈数据',
          name: 'userList'
        }
      },
      {
        path: 'expressway/expresswayServiceAreaList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '高速服务区',
          name: 'userList'
        }
      },
      {
        path: 'bus/busStationList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '公交站点',
          name: 'userList'
        }
      },
      {
        path: 'expressway/expresswayGateList', /* 系统管理 */
        name: 'userList',
        component: ()=> import('@/view/table'),
        meta: {
          title: '高速收费站',
          name: 'userList'
        }
      },






      
      
    ]
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout'),
      redirect: '/plotanddesign/plotList',
      children: [
        {
          path: 'plotanddesign/plotList', /* 系统管理 */
          name: 'plotList',
          component: ()=> import('@/view/table'),
          meta: {
            title: '策划单',
            tableHeaders: ['工单Id','要求说明','状态','创建人','创建时间','操作'],
            page: 1,
            limit: 10
          }
        },
        {
          path: 'plotanddesign/originalityList', /* 系统管理 */
          name: 'originalityList',
          component: ()=> import('@/view/table'),
          meta: {
            title: '创意单',
            tableHeaders: ['工单Id','要求说明','状态','创建人','创建时间','操作'],
            page: 1,
            limit: 10
          }
        },
        {
          path: 'workOrder/addEditOrder', /* 系统管理 */
          name: 'addEditOrder',
          component: ()=> import('@/view/table'),
          meta: {
            title: '新建工单',
            name: 'plotList'
          }
        },
        {
          path: 'workOrder/CSBacklog', /* 系统管理 */
          name: 'CSBacklog',
          component: ()=> import('@/view/table'),
          meta: {
            title: '待办事项',
            tableHeaders: ['工单Id','要求说明','状态','创建人','创建时间','操作'],
            page: 1,
            limit: 10
          }
        },
        {
          path: 'workOrder/CSDone', /* 系统管理 */
          name: 'CSDone',
          component: ()=> import('@/view/table'),
          meta: {
            title: '已办事项',
            name: 'plotList'
          }
        },
        {
          path: 'workOrder/perlSummary', /* 系统管理 */
          name: 'perlSummary',
          component: ()=> import('@/view/table'),
          meta: {
            title: '个人汇总',
            name: 'plotList'
          }
        },
        {
          path: 'workOrder/MDBacklog', /* 系统管理 */
          name: 'MDBacklog',
          component: ()=> import('@/view/table'),
          meta: {
            title: '媒介待办事项',
            name: 'plotList'
          }
        },
        {
          path: 'workOrder/MDSendIng', /* 系统管理 */
          name: 'MDSendIng',
          component: ()=> import('@/view/table'),
          meta: {
            title: '没接派单中',
            name: 'MDSendIng'
          }
        },
  
        {
          path: 'workOrder/MDSendFinish', /* 系统管理 */
          name: 'MDSendFinish',
          component: ()=> import('@/view/table'),
          meta: {
            title: '媒介派单完成',
            name: 'MDSendFinish'
          }
        },
        {
          path: 'workOrder/MDDone', /* 系统管理 */
          name: 'MDDone',
          component: ()=> import('@/view/table'),
          meta: {
            title: '媒介已办事项',
            name: 'MDDone'
          }
        },
        {
          path: 'workOrder/memberDemand', /* 系统管理 */
          name: 'memberDemand',
          component: ()=> import('@/view/table'),
          meta: {
            title: '客户需求',
            name: 'memberDemand'
          }
          
        },
        {
          path: 'workOrder/MyAssist', /* 系统管理 */
          name: 'MyAssist',
          component: ()=> import('@/view/table'),
          meta: {
            title: '我的协助',
            name: 'MyAssist'
          }
        }] 
      
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
