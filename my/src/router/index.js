import Vue from 'vue'
import Router from 'vue-router'


import index from '@/pages/index'
import movieDetail from '@/pages/movieDetail'
import loginc from '@/pages/loginc'



Vue.use(Router)

export default new Router({
    mode: 'history',//去掉#
    routes:[
        {
            path: '/index',  //碰到这个路径跳转路由至index
            name: 'index', //给这个路由取一个别名
            component: index, //代表在当前路径下，加载index路由
            meta:{
                keepAlive:true //在meta属性中设置自定义属性，为true则保留组件状态
            }
        },
        {
            path:'/movieDetail',
            name: 'movieDetail',
            component: movieDetail
        },
        {
            path:'/loginc',
            name: 'loginc',
            component: loginc
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('../pages/login')
        },
        {
            path:'/register',
            name:'register',
            component:()=>import('../pages/register')
        },
        {
            path:'/tabZujian',
            name:'tabZujian',
            component:()=>import('../tab/tabZujian')
        },
        {
            path:'/echarts',
            name:'echarts',
            component:()=>import('@/components/echarts')
        },
        {
            path:'/',
            name:'main',
            component:()=>import('@/components/main')
        }
     

    ]
})



