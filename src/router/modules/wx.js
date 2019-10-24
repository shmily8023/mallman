/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/mp',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested23',
  meta: {
    title: '微信公众号配置',
    icon: 'nested'
  },
  children: [
    {
      path: 'mp-config',
      name: 'mp-config',
      component: () => import('@/views/system/mp-config'),
      meta: { title: '基本配置' }
    },
    {
      path: 'userconfig',
      name: 'userconfig',
      component: () => import('@/views/wx/user/tag-group'),
      meta: { title: '用户管理' }
    },
    {
      path: 'autoreply',
      component: () => import('@/views/charts/keyboard'), // Parent router-view
      name: 'autoreply',
      meta: { title: '自动回复' },
      redirect: '/nested/menu1/menu1-100',
      children: [
        {
          path: 'subcribe',
          component: () => import('@/views/charts/keyboard'),
          name: 'subcribe',
          meta: { title: '关注' }
        },
        {
          path: 'uncheck',
          component: () => import('@/views/charts/keyboard'),
          name: 'uncheck',
          meta: { title: '未识别' }
        },
        {
          path: 'gjz',
          component: () => import('@/views/charts/keyboard'),
          name: 'gjz',
          meta: { title: '关键词' }
        }
      ]
    },
    {
      path: 'tempman',
      component: () => import('@/views/system/sysconfig'), // Parent router-view
      name: 'tempman',
      meta: { title: '素材管理' },
      children: [
        {
          path: 'graph',
          component: () => import('@/views/system/sysconfig'),
          name: 'graph',
          meta: { title: '图文素材' }
        },
        {
          path: 'temp2',
          component: () => import('@/views/wx/temp/sysconfig'),
          name: 'temp2',
          meta: { title: '素材管理' }
        }
      ]
    },
    {
      path: 'wx',
      component: () => import('@/views/wx/user/tag-group'), // Parent router-view
      name: 'wx',
      meta: { title: '群发管理' },
      redirect: '/wx/user',
      children: [
        {
          path: 'grateful',
          component: () => import('@/views/charts/keyboard'),
          name: 'grateful',
          meta: { title: '群发图文' }
        },
        {
          path: 'gratefulmessage',
          component: () => import('@/views/charts/keyboard'),
          name: 'gratefulmessage',
          meta: { title: '群发消息' }
        },
        {
          path: 'gratefulcheck',
          component: () => import('@/views/charts/keyboard'),
          name: 'gratefulcheck',
          meta: { title: '群发审核' }
        },
        {
          path: 'graphlog',
          component: () => import('@/views/charts/keyboard'),
          name: 'graphlog',
          meta: { title: '群发记录' }
        }
      ]
    },
    {
      path: 'datafx',
      name: 'datafx',
      component: () => import('@/views/charts/keyboard'),
      meta: { title: '统计分析' }
    }
  ]
}

export default nestedRouter
