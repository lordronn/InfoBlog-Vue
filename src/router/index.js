import Vue from 'vue'
import VueRouter from 'vue-router'

import News from '../views/News.vue'
import ArticleId from '../views/Article.vue'
import Authors from '../views/Authors.vue'
import AuthorId from '../views/Author.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'News',
    component: News,
    props: true
  },
  {
    path: '/authors',
    name: 'Authors',
    component: Authors

  },
  {
    path: '/article/:id',
    name: 'ArticleId',
    component: ArticleId,
    props: true
  },
  {
    path: '/author/:id',
    name: 'AuthorId',
    component: AuthorId,
    props: true
  }  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
