import Vue from 'vue'
import Router from 'vue-router'
/*一级路由*/
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/admin/Admin'
import About from '@/components/About'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Order from '@/components/Orders'

/*二级路由*/
import History from '@/components/about/content/History'
import Express from '@/components/about/content/Express'
import Guide from '@/components/about/content/Guide'
import Contact from '@/components/about/content/Contact'

/*三极路由*/
import Phone from '@/components/about/content/contact/Phone'
import PersonName from '@/components/about/content/contact/PersonName'

Vue.use(Router);
const router =  [
    {
      path: '*',      //没有配置的路径
      redirect: '/'   //默认跳转首页
    },
    {
      path: '/',
      name: 'homeLink',
      components:{        //一个页面里，多个路由容器vue-router
        default:Home,
        'guide' : Guide,
        'express': Express,
        'history' : History,
      }
    },
    {
      path:'/menu',
      name:'menuLink',
      component:Menu
    },
    {
      path:'/admin',
      name:'adminLink',
      component:Admin
    },
    {
      path:'/order',
      name:'orderLink',
      component:Order
    },
    {
      path:'/about',      //一级路由
      // name:'aboutLink',
      component:About,
      children:[          //二级路由
        {
          path:'/',
          name:'historyLink',
          component:History
        },
        {
          path:'/about/express',
          name:'expressLink',
          component:Express
        },
        {
          path:'/about/guide',
          name:'guideLink',
          component:Guide
        },
        {
          path:'/about/contact',
          name:'contactLink',
          component:Contact,
          children:[            //三级路由
            {
              path:'/about/contact/personName',
              name:'personNameLink',
              component:PersonName,
              beforeEnter:(to,from,next)=>{       //路由独享守卫
                alert('触发守卫！');
                next();
              }
            },
            {
              path:'/about/contact/phone',
              name:'phoneLink',
              component:Phone
            },

          ]
        }
      ]
    },
    {
      path:'/login',
      name:'loginLink',
      component:Login
    },
    {
      path:'/register',
      name:'registerLink',
      component:Register
    },
  ];
export default new Router({
  routes: router,
  mode:"history",
  /*滚动行为*/
  scrollBehavior(to,from,savedPosition){
    if (savedPosition){
      return savedPosition;       //按后退键，滚动条停留在上一次浏览的位置
    } else {
      return{x:0, y:60}       //路由跳转时，滚动条的默认位置
    }
    // return {selector:'.btn'}     //滚动条浏览在指定目标位置
  }
})

