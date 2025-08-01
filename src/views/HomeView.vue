<template>
  <div class="home">
    <header class="home__hero">
      <div class="container">
        <h1 class="home__title">Museu Virtual de Memórias</h1>
        <p class="home__subtitle">"Cada lembrança merece seu próprio espaço"</p>
        
        <div class="home__cta">
          <router-link 
            v-if="!isAuthenticated" 
            to="/login" 
            class="btn btn--primary"
          >
            Comece sua Exposição
          </router-link>
          <router-link 
            v-else 
            to="/dashboard" 
            class="btn btn--primary"
          >
            Minhas Exposições
          </router-link>
        </div>
      </div>
    </header>

    <section class="home__features">
      <div class="container">
        <h2>Como Funciona</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <h3>🏛️ Crie sua Sala Virtual</h3>
            <p>Organize suas memórias em um espaço único e personalizado, com tema e estilo próprios.</p>
          </div>

          <div class="feature-card">
            <h3>📸 Múltiplos Formatos</h3>
            <p>Fotos, vídeos, áudios e textos - cada memória no seu formato ideal.</p>
          </div>

          <div class="feature-card">
            <h3>📅 Linha do Tempo</h3>
            <p>Organize cronologicamente suas memórias e navegue através do tempo.</p>
          </div>

          <div class="feature-card">
            <h3>🌍 Compartilhe</h3>
            <p>Convide amigos e familiares para visitarem seu museu pessoal.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="home__examples">
      <div class="container">
        <h2>Exemplos de Salas</h2>
        
        <div class="examples-grid">
          <div class="example-card">
            <h3>"Diário de uma avó nordestina"</h3>
            <p>Uma jornada através de gerações, contada com fotos antigas e áudios emocionantes.</p>
          </div>

          <div class="example-card">
            <h3>"Minha transição de carreira"</h3>
            <p>A história de uma mudança de vida através de certificados e momentos marcantes.</p>
          </div>

          <div class="example-card">
            <h3>"Viagem dos sonhos"</h3>
            <p>Uma galeria multimídia com lugares visitados e trilha sonora personalizada.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { isAuthenticated } = storeToRefs(authStore)
</script>

<style lang="scss" scoped>
@use '@/assets/scss/views' as *;
@use 'sass:color';

.home {
  &__hero {
    min-height: 80vh;
    @include flex-center;
    flex-direction: column;
    text-align: center;
    background: linear-gradient(rgba($color-primary, 0.8), rgba($color-primary, 0.8)),
                url('@/assets/images/hero-bg.jpg') center/cover;
    color: white;
    padding: $spacing-xl * 2 0;
  }

  &__title {
    font-size: 3.5rem;
    margin-bottom: $spacing-md;
    
    @include sm {
      font-size: 2.5rem;
    }
  }

  &__subtitle {
    font-size: 1.5rem;
    margin-bottom: $spacing-xl;
    font-family: $font-family-heading;
    font-style: italic;
  }

  &__cta {
    margin-top: $spacing-xl;

    .btn {
      font-size: 1.2rem;
      padding: $spacing-md $spacing-xl;
    }
  }

  &__features,
  &__examples {
    padding: $spacing-xl * 2 0;

    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: $spacing-xl * 2;
    }
  }
}

.features-grid,
.examples-grid {
  display: grid;
  gap: $spacing-xl;
  
  @include sm {
    grid-template-columns: 1fr;
  }
  
  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include lg {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

.feature-card,
.example-card {
  @include card-base;
  text-align: center;
  padding: $spacing-xl;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: $spacing-md;
  }
  
  p {
    color: $color-text-light;
    line-height: 1.6;
  }
}

.example-card {
  background: linear-gradient(rgba(white, 0.9), rgba(white, 0.9)),
              url('@/assets/images/example-bg.jpg') center/cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}
</style>