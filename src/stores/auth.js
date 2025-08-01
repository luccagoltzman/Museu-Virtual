import { defineStore } from 'pinia'
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
        // TODO: Integrar com API real
        const response = await axios.post('/api/login', credentials)
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
        // TODO: Integrar com API real
        const response = await axios.post('/api/register', userData)
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

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})