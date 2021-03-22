import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('views/home/Home')
const Cart = ()=> import('views/cart/Cart')
const Profile = ()=> import('views/profile/Profile')
const Category = ()=> import('views/category/Category')
const Detail = ()=> import('views/detail/Detail')

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home,
    meta: { 
      title:'主页'
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta: { 
      title:'购物车'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: { 
      title:'个人'
    }
  },
  {
    path:'/category',
    component:Category,
    meta: { 
      title:'分类'
    }
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
