
let mainRouters = [
  {
    path: '/main/classification1',
    name: '分类数据1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: resolve => require(['@/components/view/Classification1'], resolve)
  },
  {
    path: '/main/classification2',
    name: '分类数据2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: resolve => require(['@/components/view/Classification2'], resolve)
  },
];

export default mainRouters;
