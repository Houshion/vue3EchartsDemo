import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '~/components/home/index.vue'
import monthPlan from '~/components/monthPlanCharts/index.vue'
import todayPlan from '~/components/todayPlanCharts/index.vue'
import management from '~/components/management/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/monthPlan',
      name: 'monthPlan',
      component: monthPlan,
    },
    {
      path: '/todayPlan',
      name: 'todayPlan',
      component: todayPlan,
    },
    {
      path: '/management',
      name: 'management',
      component: management,
    },
  ],
})

export default router
