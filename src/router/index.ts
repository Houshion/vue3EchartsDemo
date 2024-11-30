import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '~/components/home/index.vue'
import planChartsView from '~/components/planCharts/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/planChartsView',
      name: 'planChartsView',
      component: planChartsView,
    },
  ],
})

export default router
