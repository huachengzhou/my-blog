


let arr = [
  {
    path: '/right',
    name: 'right',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: resolve => require(['@/components/Right.vue'], resolve)
  },
  {
    path: '/top',
    name: 'top',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: resolve => require(['@/components/Top.vue'], resolve)
  },
];


export default {
  path: '/helloWorld',
  name: 'helloWorld',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: resolve => require(['@/components/HelloWorld.vue'], resolve),
  children: arr
};


