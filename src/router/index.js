import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import wxRouter from './modules/wx'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '主页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人信息', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: '权限',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'pagepermisson',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: '页面权限',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '角色权限',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/export-excel',
    alwaysShow: true, // will always show the root menu
    name: 'Permission2',
    meta: {
      title: '订单管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'oselect',
        component: () => import('@/views/order/query'),
        name: 'PagePermission',
        meta: {
          title: '订单查询[查询..]',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'overify',
        component: () => import('@/views/order/verify'),
        name: 'DirectivePermission',
        meta: {
          title: '订单验证'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'reverify',
        component: () => import('@/views/order/reverify'),
        name: 'RolePermission',
        meta: {
          title: '订单撤改',
          roles: ['admin']
        }
      },
      {
        path: 'ordertotal',
        component: () => import('@/views/order/ordertotal'),
        name: 'RolePermission',
        meta: {
          title: '订单总览',
          roles: ['admin']
        }
      },
      {
        path: 'reorder',
        component: () => import('@/views/other/index'),
        name: 'RolePermission',
        meta: {
          title: '订单退款',
          roles: ['admin']
        }
      },
      {
        path: 'orderquery',
        component: () => import('@/views/other/index'),
        name: 'RolePermission',
        meta: {
          title: '交易查询',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/permission3',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission3',
    meta: {
      title: '产品管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'productsadd',
        component: () => import('@/views/product/customer-buy'),
        name: 'PagePermission',
        meta: {
          title: '消费者产品预订[界面初步完成]',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'productselect',
        component: () => import('@/views/product/supply-buy'),
        name: 'DirectivePermission',
        meta: {
          title: '供应商产品预订[界面初步完成]'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'productadd',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '产品添加[实物虚物 基本 票付通 联合票 区域产品]',
          roles: ['admin']
        }
      },
      {
        path: 'productsearch',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '产品查询[可修改删除]',
          roles: ['admin']
        }
      },
      {
        path: 'productverify',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '单项目验证',
          roles: ['admin']
        }
      },
      {
        path: 'productsadd2',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '单项目新增',
          roles: ['admin']
        }
      },
      {
        path: 'productssearch',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '单项目查询 修改删除',
          roles: ['admin']
        }
      },
      {
        path: 'lsadd',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '零食售卖[水 饮料 小吃 泡面 水果]',
          roles: ['admin']
        }
      },
      {
        path: 'lssearch',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '零食查询 新增',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/permission4',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission4',
    meta: {
      title: '团队管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'groupapply',
        component: () => import('@/views/other/group'),
        name: 'PagePermission',
        meta: {
          title: '申请团队',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'groupquery',
        component: () => import('@/views/other/groupquery'),
        name: 'DirectivePermission',
        meta: {
          title: '团队查询[消费者]'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'groupselect',
        component: () => import('@/views/other/groupquery2'),
        name: 'DirectivePermission',
        meta: {
          title: '团队查询[供应商]'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/logman',
    component: Layout,
    redirect: '/logman/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission7',
    meta: {
      title: '日志管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'orderlog',
        component: () => import('@/views/log/orderlog'),
        name: 'PagePermission',
        meta: {
          title: '订单日志',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'cashlog',
        component: () => import('@/views/log/cashlog'),
        name: 'DirectivePermission',
        meta: {
          title: '提现日志[初步完成]'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'dealid',
        component: () => import('@/views/log/deallog'),
        name: 'RolePermission',
        meta: {
          title: '交易日志[初步完成]',
          roles: ['admin']
        }
      },
      {
        path: 'apilog',
        component: () => import('@/views/log/apilog'),
        name: 'RolePermission',
        meta: {
          title: '接口操作记录',
          roles: ['admin']
        }
      },
      {
        path: 'syslog',
        component: () => import('@/views/log/syslog'),
        name: 'RolePermission',
        meta: {
          title: '系统日志[初步完成]',
          roles: ['admin']
        }
      },
      {
        path: 'refundlog',
        component: () => import('@/views/log/refundlog'),
        name: 'RolePermission',
        meta: {
          title: '退款日志[初步完成]',
          roles: ['admin']
        }
      },
      {
        path: 'verifylog',
        component: () => import('@/views/log/verifylog'),
        name: 'RolePermission',
        meta: {
          title: '验证日志[初步完成]',
          roles: ['admin']
        }
      },
      {
        path: 'expresslog',
        component: () => import('@/views/log/expresslog'),
        name: 'RolePermission',
        meta: {
          title: '快递记录[初步完成]',
          roles: ['admin']
        }
      },
      {
        path: 'sendlog',
        component: () => import('@/views/log/sendlog'),
        name: 'RolePermission',
        meta: {
          title: '发送记录',
          roles: ['admin']
        }
      },
      {
        path: 'lqlog',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '积分零钱记录',
          roles: ['admin']
        }
      },
      {
        path: 'reorderlog',
        component: () => import('@/views/log/reorderlog'),
        name: 'RolePermission',
        meta: {
          title: '订单撤改记录',
          roles: ['admin']
        }
      },
      {
        path: 'simchargelog',
        component: () => import('@/views/log/simchargelog'),
        name: 'RolePermission',
        meta: {
          title: 'SIM充值记录[初步完成]',
          roles: ['admin']
        }
      },
      {
        path: 'wxlog',
        component: () => import('@/views/log/wxlog'),
        name: 'RolePermission',
        meta: {
          title: '微信操作记录',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/systemconfig',
    component: Layout,
    redirect: '/systemconfig/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission10',
    meta: {
      title: '系统管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'backup',
        component: () => import('@/views/system/backup'),
        name: 'PagePermission',
        meta: {
          title: '备份/恢复',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'feedback',
        component: () => import('@/views/system/feeback'),
        name: 'RolePermission',
        meta: {
          title: '意见反馈处理',
          roles: ['admin']
        }
      },
      {
        path: 'base22',
        component: () => import('@/views/system/baseinfo'),
        name: 'RolePermission',
        meta: {
          title: '基本信息管理 直播配置',
          roles: ['admin']
        }
      },
      {
        path: 'role4',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '基本信息:邮费配置、支付配置',
          roles: ['admin']
        }
      },
      {
        path: 'role5',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '客服管理:客服聊天',
          roles: ['admin']
        }
      },
      {
        path: 'role6',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '员工管理:兑票员 重置登录 交易密码',
          roles: ['admin']
        }
      },
      {
        path: 'role7',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '部门管理管理:检票部 财务。。 检票限制 购票限制',
          roles: ['admin']
        }
      },
      {
        path: 'role8',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '配置 供应商状态:如下雨 部分设施关闭..',
          roles: ['admin']
        }
      },
      {
        path: 'role12',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '代理商\代理商资质审核',
          roles: ['admin']
        }
      },
      {
        path: 'role12',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '广告管理',
          roles: ['admin']
        }
      },
      {
        path: 'role13',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '客服聊天',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/permission16',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission16',
    meta: {
      title: '活动产品管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'bargain-add',
        component: () => import('@/views/product/bargain-add'),
        name: 'PagePermission',
        meta: {
          title: '砍价产品',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'integral-add',
        component: () => import('@/views/product/integral-add'),
        name: 'DirectivePermission',
        meta: {
          title: '积分产品'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'ptadd',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '拼团产品',
          roles: ['admin']
        }
      },
      {
        path: 'msadd',
        component: () => import('@/views/product/seckill-add'),
        name: 'RolePermission',
        meta: {
          title: '限时产品-可秒杀',
          roles: ['admin']
        }
      },
      {
        path: 'yhjadd',
        component: () => import('@/views/product/coupon-add'),
        name: 'RolePermission',
        meta: {
          title: '优惠券:发放 查询',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/finance',
    component: Layout,
    redirect: '/finance/page',
    alwaysShow: true, // will always show the root menu
    name: 'finance',
    meta: {
      title: '财务管理',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'query',
        component: () => import('@/views/finance/verify'),
        name: 'PagePermission',
        meta: {
          title: '查看对账单',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'reverify',
        component: () => import('@/views/finance/reverify'),
        name: 'DirectivePermission',
        meta: {
          title: '付款记录'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'query3',
        component: () => import('@/views/finance/verify'),
        name: 'RolePermission',
        meta: {
          title: '发票管理',
          roles: ['admin']
        }
      },
      {
        path: 'query4',
        component: () => import('@/views/finance/verify'),
        name: 'RolePermission',
        meta: {
          title: '保证金账户',
          roles: ['admin']
        }
      },
      {
        path: 'query5',
        component: () => import('@/views/finance/verify'),
        name: 'RolePermission',
        meta: {
          title: '资金转账',
          roles: ['admin']
        }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  wxRouter,
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '例子',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      },
      {
        path: 'icon',
        component: () => import('@/views/icons/index'),
        name: 'ArticleList2',
        meta: { title: '图标', icon: 'icon' }
      },
      {
        path: 'tag',
        component: () => import('@/views/tab/index'),
        name: 'ArticleList2',
        meta: { title: '标签', icon: 'tab' }
      },
      {
        path: 'guide',
        component: () => import('@/views/tab/index'),
        name: 'ArticleList2',
        meta: { title: '向导', icon: 'guide' }
      },
      {
        path: 'pdf',
        component: () => import('@/views/pdf/index'),
        name: 'pdf',
        meta: { title: 'PDF', icon: 'pdf' }
      },
      {
        path: 'theme',
        component: () => import('@/views/other/theme'),
        name: 'theme',
        meta: { title: 'theme', icon: 'theme' }
      },
      {
        path: 'clipboard',
        component: () => import('@/views/clipboard/index'),
        name: 'clipboard',
        meta: { title: 'clipboard', icon: 'clipboard' }
      },
      {
        path: 'zip',
        component: () => import('@/views/other/zip'),
        name: 'clipboard',
        meta: { title: 'zip', icon: 'zip' }
      },
      {
        path: 'realname',
        component: () => import('@/views/other/zip'),
        name: 'clipboard',
        meta: { title: '用户实名认证', icon: 'zip' }
      },
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'clipboard',
        meta: { title: '401', icon: 'zip' }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'clipboard',
        meta: { title: '404', icon: 'zip' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/select-excel'),
        name: 'SelectExcel',
        meta: { title: 'SelectExcel', icon: 'zip' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/upload-excel'),
        name: 'UploadExcel',
        meta: { title: 'UploadExcel', icon: 'zip' }
      },
      {
        path: '/pdf/download',
        component: () => import('@/views/pdf/download'),
        name: 'download',
        meta: { title: '404', icon: 'zip' },
        hidden: true
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
