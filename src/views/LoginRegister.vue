<template>
  <div class="auth-page">
    <div class="auth-container">
      <!-- Lado esquerdo - Imagem/Banner -->
      <div class="auth-banner">
        <div class="auth-banner__content">
          <h1>Museu Virtual de Memórias</h1>
          <p>"Cada lembrança merece seu próprio espaço"</p>
        </div>
      </div>

      <!-- Lado direito - Formulário -->
      <div class="auth-form-container">
        <div class="auth-form-wrapper">
          <div class="auth-header">
            <h2>{{ isRegister ? 'Criar Conta' : 'Bem-vindo de volta!' }}</h2>
            <p>{{ isRegister ? 'Comece a criar seu museu de memórias' : 'Entre para continuar sua jornada' }}</p>
          </div>

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
            <span class="error-icon">⚠️</span>
            {{ authStore.error }}
          </div>

          <form @submit.prevent="handleSubmit" class="auth-form">
            <template v-if="isRegister">
              <div class="form-group">
                <label for="name">Nome completo</label>
                <div class="input-wrapper">
                  <span class="input-icon">👤</span>
                  <input 
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Como devemos te chamar?"
                  >
                </div>
              </div>
            </template>

            <div class="form-group">
              <label for="email">E-mail</label>
              <div class="input-wrapper">
                <span class="input-icon">✉️</span>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="password">Senha</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input 
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="••••••••"
                >
                <button 
                  type="button"
                  class="password-toggle"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <template v-if="isRegister">
              <div class="form-group">
                <label for="password_confirmation">Confirme a Senha</label>
                <div class="input-wrapper">
                  <span class="input-icon">🔒</span>
                  <input 
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    :type="showPasswordConfirm ? 'text' : 'password'"
                    required
                    placeholder="••••••••"
                  >
                  <button 
                    type="button"
                    class="password-toggle"
                    @click="showPasswordConfirm = !showPasswordConfirm"
                  >
                    {{ showPasswordConfirm ? '🙈' : '👁️' }}
                  </button>
                </div>
              </div>
            </template>

            <button 
              type="submit" 
              class="btn btn--primary btn--block"
              :disabled="authStore.loading"
            >
              <span v-if="authStore.loading" class="loading-spinner">
                <span class="spinner"></span>
              </span>
              <span v-else>{{ isRegister ? 'Criar Conta' : 'Entrar' }}</span>
            </button>

            <p class="auth-footer">
              {{ isRegister ? 'Já tem uma conta?' : 'Ainda não tem uma conta?' }}
              <button 
                type="button"
                class="link-button"
                @click="isRegister = !isRegister"
              >
                {{ isRegister ? 'Faça login' : 'Cadastre-se' }}
              </button>
            </p>
          </form>
        </div>
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
const showPassword = ref(false)
const showPasswordConfirm = ref(false)

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
  background-color: $color-background;
  @include flex-center;
}

.auth-container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  margin: $spacing-xl;
  background: white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  @include shadow('lg');
}

.auth-banner {
  display: none;
  @include md {
    display: flex;
    flex: 1;
    background: linear-gradient(135deg, rgba($color-primary, 0.9), rgba($color-secondary, 0.9)),
                url('@/assets/images/auth-bg.jpg') center/cover;
    padding: $spacing-xl;
    color: white;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('@/assets/images/pattern.svg') center/cover;
      opacity: 0.1;
    }

    &__content {
      position: relative;
      z-index: 1;
      margin: auto;
      text-align: center;
      max-width: 400px;

      h1 {
        font-size: 2.5em;
        margin-bottom: $spacing-md;
        font-family: $font-family-heading;
      }

      p {
        font-size: 1.2em;
        opacity: 0.9;
        font-style: italic;
      }
    }
  }
}

.auth-form-container {
  flex: 1;
  padding: $spacing-xl;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.auth-form-wrapper {
  margin: auto;
  width: 100%;
  max-width: 400px;
}

.auth-header {
  text-align: center;
  margin-bottom: $spacing-xl;

  h2 {
    font-size: 1.8em;
    color: $color-primary;
    margin-bottom: $spacing-sm;
  }

  p {
    color: $color-text-light;
  }
}

.auth-tabs {
  display: flex;
  margin-bottom: $spacing-xl;
  background: $color-background;
  padding: 4px;
  border-radius: $border-radius-full;

  button {
    flex: 1;
    padding: $spacing-sm $spacing-md;
    border: none;
    background: none;
    color: $color-text-light;
    font-weight: 500;
    border-radius: $border-radius-full;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: white;
      color: $color-primary;
      @include shadow('sm');
    }
  }
}

.form-group {
  margin-bottom: $spacing-lg;

  label {
    display: block;
    margin-bottom: $spacing-xs;
    font-weight: 500;
    color: $color-text;
  }
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background: $color-background;
  border-radius: $border-radius-md;
  transition: all 0.3s ease;

  &:focus-within {
    background: white;
    @include shadow('sm');

    .input-icon {
      color: $color-primary;
    }
  }

  .input-icon {
    padding: 0 $spacing-sm;
    color: $color-text-light;
  }

  input {
    flex: 1;
    padding: $spacing-md;
    border: none;
    background: none;
    outline: none;
    font-size: 1em;

    &::placeholder {
      color: color.adjust($color-text-light, $alpha: -0.5);
    }
  }
}

.password-toggle {
  background: none;
  border: none;
  padding: $spacing-sm;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
}

.btn--block {
  width: 100%;
  padding: $spacing-md;
  font-size: 1.1em;
  margin-top: $spacing-xl;
  position: relative;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(white, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 0.8s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  background: color.adjust($color-accent, $lightness: 45%);
  color: $color-accent;
  padding: $spacing-md;
  border-radius: $border-radius-md;
  margin-bottom: $spacing-lg;
  display: flex;
  align-items: center;
  gap: $spacing-sm;

  .error-icon {
    font-size: 1.2em;
  }
}

.auth-footer {
  text-align: center;
  margin-top: $spacing-lg;
  color: $color-text-light;

  .link-button {
    background: none;
    border: none;
    color: $color-primary;
    font-weight: 500;
    cursor: pointer;
    padding: 0 $spacing-xs;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>