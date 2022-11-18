const routes = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/member',
        name: 'Member',
        component: () => import(/* webpackChunkName: "home" */ '@/views/member/index'),
        meta: { title: '会员', keepAlive: false }
      }
    ]
  }
]

export default routes

