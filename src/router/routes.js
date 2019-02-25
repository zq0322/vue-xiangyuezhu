const routes = [{
    path: '/', 
    redirect: '/team/home' 
  },
    {
      path: '/team',
      name: "team",
      component: ()=>import('@/containers/index'),
      children: [
        {
        path: 'home',//首页
        name: "Home",
        component: ()=>import('@/containers/home'),
      }, {
        path: 'statement',//购物车
        name: "statement",
        component:  ()=>import('@/containers/statement'),
      }, {
        path: 'mine',//我的
        name: "mine",
        component: ()=>import('@/containers/mine'),
        children:[
            {
              path: 'login',
              component: ()=>import('@/components/login') //登录
            },
            {
              path: "register",
              component: ()=>import('@/components/register') //注册 
            }
          ]
      }
    ],

    },
    {
      path:"/products",//产品介绍
      component:()=>import('@/containers/products'),
      name:"Products"
    },
    {
      path:"/company",//公司简介
      component:()=>import('@/containers/company'),
      name:"Company"
    },
    {
      path: "/detail",
      component: ()=>import('@/containers/detail'), //详情页,
      name: "Detail"
    },
    {
      path: "/revision",//修改密码
      component: ()=>import('@/components/revision'),
      name: "revision"
    },
    {
      path: '/lease', //这是租约模块
      component: ()=>import('@/components/lease'), //租约
      children: [{
          path: 'leaseHistory',
          name: 'LeaseHistory',
          component: ()=>import('@/components/lease/lease-history') //缴租记录
        },
        {
          path: 'leaseing',
          name: 'leaseing',
          component: ()=>import('@/components/lease/leaseing') //租约进行中
        },
        {
          path: 'management',
          name: 'management',
          component: ()=>import('@/components/lease/management') //租金管理
        },
        {
          path: 'renewal',
          name: 'renewal',
          component: ()=>import('@/components/lease/renewal') //续租
        },
        {
          path: 'renewalHistory',
          name: 'renewalHistory',
          component: ()=>import('@/components/lease/renewal/renewal-history') //续租记录
        },
        {
          path: 'consultation',
          name: 'consultation',
          component: ()=>import('@/components/lease/consultation') //问题咨询'
        },
        {
          path: 'success',
          name: 'success',
          component: ()=>import('@/components/lease/success') //提交成功
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: ()=>import('@/components/lease/feedback') //信息反馈
        },
        {
          path: 'repair',
          name: 'repair',
          component: ()=>import('@/components/lease/repair') //报修
        },
        {
          path:'repairHistory',
          name:'repairHistory',
          component:()=>import('@/components/lease/repairHistory')//报修记录
         },
            {
              path:'detailHistory',
              name:'detailHistory',
              component:()=>import('@/components/lease/repairHistory/detailHistory')//报修记录'
            }
      ]
    },
    //退租
    {
      path: "/surrender",
      name: "surrender",
      component: ()=>import('@/components/surrender') //退租
    },
    //退租成功
    {
      path: "/WithoutSuccess",
      name: "WithoutSuccess",
      component: ()=>import('@/components/WithoutSuccess') //退租成功
    },
    {
      path: '/leasemessage',
      component: ()=>import('@/components/leasemessage/index') //租赁人信息
    },
    {
      path: '/paycycle',
      component: ()=>import('@/components/paycycle/index') //支付周期
    },
    {
      path: '/delivery',
      component: ()=>import('@/components/delivery/index') //家具家电
    },
    {
      path: '/paysuccess',
      component:()=>import('@/components/paysuccess/index') //支付成功
    },
    {
      path: '/altercode',
      component: ()=>import('@/components/altercode/index') //修改密码
    },
    {
      path: '/alterphone',
      component: ()=>import('@/components/alterphone/index') //修改手机号
    },
    {
      path: '/payment',
      component: ()=>import('@/components/payment/index') //支付
    },
    {
      path: '/news',
      component: ()=>import('@/components/news/index') //消息
    },
    {
      path: '/noless',
      component: ()=>import('@/components/noless/index') //未租约
    },
    {
      path: '/newcode',
      component: ()=>import('@/components/newcode/index') //设置新密码
    }
  ]

export default routes;