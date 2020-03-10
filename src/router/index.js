import Vue from 'vue'
import VueRouter from 'vue-router'

const Layout = () => import('@/views/Layout')
// import Home from '../views/Home.vue'
const Home = () => import('@/views/home')
const Question = () => import('@/views/question')
const Video = () => import('@/views/video')
const User = () => import('@/views/user')
const Search = () => import('@/views/search')
const Profile = () => import('@/views/user/profile')
const UserChat = () => import('@/views/user/chat')
const Login = () => import('@/views/login')
// const SearchResult = () => import('@/views/search/result')
const Article = () => import('@/views/article')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/video1', component: Login },
      { path: '/', component: Home },
      { path: '/question', component: Question },
      { path: '/video', component: Video },
      { path: '/user', component: User }
    ]
  },

  { path: '/user/profile', component: Profile },
  { path: '/user/chat', component: UserChat },
  { path: '/login', component: Login },
  { path: '/search', component: Search },
  // { path: '/search/result', component: SearchResult },
  { path: '/article', component: Article }
]

const router = new VueRouter({
  routes
})

export default router
