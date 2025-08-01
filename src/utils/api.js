import api from '../plugins/axios.js'

export const authService = {
  register: (userData) => api.post('/api/register', userData),
  login: (credentials) => api.post('/api/login', credentials),
  logout: () => api.post('/api/logout'),
  getUser: () => api.get('/api/user')
}

export const salasService = {
  // Rotas públicas
  getSalaBySlug: (slug) => api.get(`/api/salas/${slug}`),
  
  // Rotas protegidas
  getAll: () => api.get('/api/salas'),
  create: (salaData) => api.post('/api/salas', salaData),
  getById: (id) => api.get(`/api/salas/${id}`),
  update: (id, salaData) => api.put(`/api/salas/${id}`, salaData),
  delete: (id) => api.delete(`/api/salas/${id}`)
}

export const memoriasService = {
  create: (salaId, memoriaData) => {
    const formData = new FormData()
    Object.keys(memoriaData).forEach(key => {
      formData.append(key, memoriaData[key])
    })
    return api.post(`/api/salas/${salaId}/memorias`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  delete: (memoriaId) => api.delete(`/api/memorias/${memoriaId}`)
}