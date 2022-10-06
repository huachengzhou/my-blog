
let mainRouter = {} ;


/**
 * 布局路由
 * @type {{path: string, components: {default: (function(*=): *), aside: (function(*=): *), footer: (function(*=): *), header: (function(*=): *)}, name: string}}
 */
let container = {
  path: '/container',
  name: 'container',
  components: {
    default: resolve => require(['@/components/home/container/Main.vue'], resolve),
    footer: resolve => require(['@/components/home/container/Footer.vue'], resolve),
    aside: resolve => require(['@/components/home/container/Aside.vue'], resolve),
    header: resolve => require(['@/components/home/container/Header.vue'], resolve)
  }
};


/**
 * 导出主页路由
 */
export default {
  path: '/home',
  name: 'home',
  component: resolve => require(['@/components/home/Home.vue'], resolve),
  children: [container]
};


