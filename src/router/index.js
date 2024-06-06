import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgrammingView from '../views/ProgrammingView.vue'
import ModulesView from '@/views/ModulesView.vue'
import CargoManagerView from '@/views/CargoManagerView.vue'
import SetupView from '@/views/SetupView.vue'
import SettingsView from '@/views/SettingsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: HomeView
  },
  {
    path: '/programming',
    name: 'Programming',
    component: ProgrammingView
  },
  {
    path: '/setup',
    name: 'Setup',
    component: SetupView
  },
  {
    path: '/modules',
    name: 'Modules',
    component: ModulesView
  },
  {
    path: '/modules/cargo-manager',
    name: 'Cargo Manager',
    component: CargoManagerView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView
  },
  {
    path: '/documentation',
    name: 'Documentation',
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
