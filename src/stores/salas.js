import { defineStore } from 'pinia'
import axios from 'axios'

export const useSalasStore = defineStore('salas', {
  state: () => ({
    salas: [],
    currentSala: null,
    loading: false,
    error: null
  }),

  getters: {
    getUserSalas: (state) => state.salas,
    getCurrentSala: (state) => state.currentSala
  },

  actions: {
    async fetchUserSalas() {
      try {
        this.loading = true
        // TODO: Integrar com API real
        const response = await axios.get('/api/salas')
        this.salas = response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao carregar salas'
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchSalaBySlug(slug) {
      try {
        this.loading = true
        // TODO: Integrar com API real
        const response = await axios.get(`/api/salas/${slug}`)
        this.currentSala = response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao carregar sala'
        throw error
      } finally {
        this.loading = false
      }
    },

    async createSala(salaData) {
      try {
        this.loading = true
        // TODO: Integrar com API real
        const response = await axios.post('/api/salas', salaData)
        this.salas.push(response.data)
        return response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao criar sala'
        throw error
      } finally {
        this.loading = false
      }
    },

    async addMemoria(salaId, memoriaData) {
      try {
        this.loading = true
        // TODO: Integrar com API real
        const response = await axios.post(`/api/salas/${salaId}/memorias`, memoriaData)
        const salaIndex = this.salas.findIndex(s => s.id === salaId)
        if (salaIndex !== -1) {
          this.salas[salaIndex].memorias.push(response.data)
        }
        if (this.currentSala?.id === salaId) {
          this.currentSala.memorias.push(response.data)
        }
        return response.data
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao adicionar memória'
        throw error
      } finally {
        this.loading = false
      }
    },

    async removeMemoria(memoriaId) {
      try {
        this.loading = true
        // TODO: Integrar com API real
        await axios.delete(`/api/memorias/${memoriaId}`)
        if (this.currentSala) {
          this.currentSala.memorias = this.currentSala.memorias.filter(m => m.id !== memoriaId)
        }
      } catch (error) {
        this.error = error.response?.data?.message || 'Erro ao remover memória'
        throw error
      } finally {
        this.loading = false
      }
    }
  }
})