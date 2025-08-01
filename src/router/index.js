import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/criar-sala',
    name: 'criar-sala',
    component: () => import('../views/CreateSala.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sala/:id/editar',
    name: 'editar-sala',
    component: () => import('../views/SalaEditor.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/sala/:slug',
    name: 'visualizar-sala',
    component: () => import('../views/SalaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Guarda de rota para autenticação
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router