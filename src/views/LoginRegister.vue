<template>
  <div class="auth-page">
    <div class="container">
      <div class="auth-card">
        <div class="auth-tabs">
          <button 
            :class="{ active: !isRegister }"
            @click="isRegister = false"
          >
            Login
          </button>
          <button 
            :class="{ active: isRegister }"
            @click="isRegister = true"
          >
            Cadastro
          </button>
        </div>

        <div v-if="authStore.error" class="error-message">
          {{ authStore.error }}
        </div>

        <form @submit.prevent="handleSubmit" class="auth-form">
          <template v-if="isRegister">
            <div class="form-group">
              <label for="name">Nome</label>
              <input 
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Seu nome completo"
              >
            </div>
          </template>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input 
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="seu@email.com"
            >
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <input 
              id="password"
              v-model="form.password"
              type="password"
              required
              placeholder="••••••••"
            >
          </div>

          <template v-if="isRegister">
            <div class="form-group">
              <label for="password_confirmation">Confirme a Senha</label>
              <input 
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                required
                placeholder="••••••••"
              >
            </div>
          </template>

          <button 
            type="submit" 
            class="btn btn--primary btn--block"
            :disabled="authStore.loading"
          >
            <span v-if="authStore.loading">Carregando...</span>
            <span v-else>{{ isRegister ? 'Criar Conta' : 'Entrar' }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const isRegister = ref(false)

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleSubmit = async () => {
  try {
    if (isRegister.value) {
      await authStore.register(form)
    } else {
      await authStore.login({
        email: form.email,
        password: form.password
      })
    }
    router.push('/dashboard')
  } catch (error) {
    // Erro já é tratado no store
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/views' as *;
@use 'sass:color';

.auth-page {
  min-height: 100vh;
  @include flex-center;
  padding: $spacing-xl 0;
  background: linear-gradient(135deg, $color-primary, $color-secondary);
}

.auth-card {
  background: white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  width: 100%;
  max-width: 480px;
  @include shadow('lg');
}

.auth-tabs {
  display: flex;
  margin-bottom: $spacing-xl;
  border-bottom: 1px solid $color-border;

  button {
    flex: 1;
    padding: $spacing-md;
    background: none;
    border: none;
    font-size: 1.1em;
    color: $color-text-light;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      color: $color-primary;
      border-bottom: 2px solid $color-primary;
    }

    &:hover:not(.active) {
      color: $color-text;
    }
  }
}

.auth-form {
  .btn--block {
    width: 100%;
    margin-top: $spacing-lg;
  }
}
</style>