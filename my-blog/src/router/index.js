import Vue from 'vue'
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter);



const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
];

const router = new VueRouter({
  // mode: 'history',//修改模式为history
  // linkActiveClass: 'active',
  routes
});

//全局前置守卫 (2.5以前router.beforeResolve 注册后和现在的钩子差不多)
router.beforeEach((to, from, next) => {
  // console.log(to);
  if (to.name) {
    document.title = to.name;
  }
  // console.log(from);
  //必须调用，不调用不会跳转
  next();
});

//全局后置钩子 => 和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
router.afterEach((to, from) => {
  console.log(to);
  console.log(from);
});

//vue 路由切换时，重复点击相同路由会报错，解决方案
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default router;
