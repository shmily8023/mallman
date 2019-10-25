/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/mp',
  component: Layout,
  redirect: '/nested',
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
      component: () => import('@/views/wx/tag-group'),
      meta: { title: '用户管理' }
    },
    {
      path: 'autoreply',
      name: 'autoreply',
      component: () => import('@/views/wx/autoreply'),
      meta: { title: '自动回复' }
    },
    {
      path: 'groupsend',
      name: 'groupsend',
      component: () => import('@/views/wx/groupsend'),
      meta: { title: '群发管理' }
    },
    {
      path: 'material',
      name: 'material',
      component: () => import('@/views/wx/material'),
      meta: { title: '素材管理' }
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
