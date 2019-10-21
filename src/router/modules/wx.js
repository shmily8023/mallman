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
      path: 'menu1100',
      component: () => import('@/views/charts/keyboard'), // Parent router-view
      name: 'Menu1',
      meta: { title: '自动回复' },
      redirect: '/nested/menu1/menu1-100',
      children: [
        {
          path: 'menu1-1144',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-144',
          meta: { title: '关注' }
        },
        {
          path: 'menu1-11155',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-1255',
          meta: { title: '未识别' }
        },
        {
          path: 'menu1-11166',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-1266',
          meta: { title: '关键词' }
        }
      ]
    },
    {
      path: 'menu1177',
      component: () => import('@/views/charts/keyboard'), // Parent router-view
      name: 'Menu177',
      meta: { title: '素材管理' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1188',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-188',
          meta: { title: '消息素材' }
        },
        {
          path: 'menu1-111a',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-12a',
          meta: { title: '图文素材' }
        },
        {
          path: 'menu1-111b',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-12b',
          meta: { title: '语音素材' }
        },
        {
          path: 'menu1-111c',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-12c',
          meta: { title: '视频素材' }
        },
        {
          path: 'menu1-111d',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-d',
          meta: { title: '图片素材' }
        }
      ]
    },
    {
      path: 'menu11e',
      component: () => import('@/views/charts/keyboard'), // Parent router-view
      name: 'Menu1e',
      meta: { title: '用户管理' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-11f',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-11f',
          meta: { title: '标签与分组' }
        },
        {
          path: 'menu1-111h',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-12h',
          meta: { title: '用户管理' }
        },
        {
          path: 'menu1-21i',
          component: () => import('@/views/charts/keyboard'),
          name: 'Menu1-21i',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: '消息群发' },
          children: [
            {
              path: 'menu1-2-11j',
              component: () => import('@/views/charts/keyboard'),
              name: 'Menu1-2-11j',
              meta: { title: '群发图文' }
            },
            {
              path: 'menu1-2-21k',
              component: () => import('@/views/charts/keyboard'),
              name: 'Menu1-2-21k',
              meta: { title: '群发消息' }
            },
            {
              path: 'menu1-2-21l',
              component: () => import('@/views/charts/keyboard'),
              name: 'Menu1-2-21l',
              meta: { title: '群发审核' }
            },
            {
              path: 'menu1-2-21m',
              component: () => import('@/views/charts/keyboard'),
              name: 'Menu1-2-21m',
              meta: { title: '群发记录' }
            }
          ]
        }
      ]
    },
    {
      path: 'menu21n',
      name: 'Menu21n',
      component: () => import('@/views/charts/keyboard'),
      meta: { title: '统计分析' }
    }
  ]
}

export default nestedRouter
