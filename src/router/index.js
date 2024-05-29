import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgrammingView from '../views/ProgrammingView.vue'
import ModulesView from '@/views/ModulesView.vue'
import SetupView from '@/views/SetupView.vue'
import SettingsView from '@/views/SettingsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/programming',
    name: 'programming',
    component: ProgrammingView
  },
  {
    path: '/setup',
    name: 'setup',
    component: SetupView
  },
  {
    path: '/modules',
    name: 'modules',
    component: ModulesView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/documentation',
    name: 'documentation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DocumentationView.vue')
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
