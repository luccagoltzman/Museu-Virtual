import { defineStore } from 'pinia'
import { authService } from '../utils/api.js'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user
  },

  actions: {
    async login(credentials) {
      try {
        this.loading = true
        this.error = null
        const response = await authService.login(credentials)
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao fazer login'
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData) {
      try {
        this.loading = true
        this.error = null
        // Estabelece o cookie CSRF
        await axios.get('http://localhost:8000/sanctum/csrf-cookie')
        const response = await authService.register(userData)
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao criar conta'
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      try {
        await authService.logout()
      } finally {
        this.user = null
        this.token = null
        localStorage.removeItem('token')
      }
    }
  }
})