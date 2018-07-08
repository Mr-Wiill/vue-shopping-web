import Vue from 'vue'
import Router from 'vue-router'
/*一级路由*/
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Register from '@/components/Register'

/*二级路由*/
import News from '@/components/about/content/News'
import Express from '@/components/about/content/Express'
import Guide from '@/components/about/content/Guide'
import Contact from '@/components/about/content/Contact'

/*三极路由*/
import Phone from '@/components/about/content/contact/Phone'
import PersonName from '@/components/about/content/contact/PersonName'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',      //没有配置的路径
      redirect: '/'   //默认跳转首页
    },
    {
      path: '/',
      name: 'homeLink',
      component: Home
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
      path:'/about',      //一级路由
      name:'aboutLink',
      component:About,
      children:[
        {
          path:'/',
          name:'newsLink',
          component:News
        },
        {
          path:'/express',
          name:'expressLink',
          component:Express
        },
        {
          path:'/guide',
          name:'guideLink',
          component:Guide
        },
        {
          path:'/contact',
          name:'contactLink',
          component:Contact,
          children:[
            {
              path:'/',
              name:'personNameLink',
              component:PersonName
            },
            {
              path:'/phone',
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
  ],
  mode:"history"
})
