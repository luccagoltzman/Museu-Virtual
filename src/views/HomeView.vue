<template>
  <div class="home">
    <!-- Hero Section -->
    <header class="home__hero">
      <div class="hero__background">
        <div class="hero__overlay"></div>
        <div class="hero__pattern"></div>
      </div>
      
      <div class="container">
        <div class="hero__content">
          <h1 class="hero__title">
            <span class="hero__title-line">Museu Virtual</span>
            <span class="hero__title-line">de Memórias</span>
          </h1>
          <p class="hero__subtitle">"Cada lembrança merece seu próprio espaço"</p>
          
          <div class="hero__cta">
            <router-link 
              v-if="!isAuthenticated" 
              to="/login" 
              class="btn btn--primary btn--lg"
            >
              <span>Comece sua Exposição</span>
              <span class="btn__icon">→</span>
            </router-link>
            <router-link 
              v-else 
              to="/dashboard" 
              class="btn btn--primary btn--lg"
            >
              <span>Minhas Exposições</span>
              <span class="btn__icon">→</span>
            </router-link>
          </div>

          <div class="hero__stats">
            <div class="stat-item">
              <span class="stat-number">1000+</span>
              <span class="stat-label">Memórias Compartilhadas</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Salas Criadas</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5000+</span>
              <span class="stat-label">Visitantes</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="home__features">
      <div class="container">
        <div class="section-header">
          <h2>Como Funciona</h2>
          <p>Crie seu museu pessoal em poucos passos</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-card__icon">🏛️</div>
            <h3>Crie sua Sala Virtual</h3>
            <p>Organize suas memórias em um espaço único e personalizado, com tema e estilo próprios.</p>
            <div class="feature-card__hover">
              <span class="feature-card__link">Saiba mais →</span>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">📸</div>
            <h3>Múltiplos Formatos</h3>
            <p>Fotos, vídeos, áudios e textos - cada memória no seu formato ideal.</p>
            <div class="feature-card__hover">
              <span class="feature-card__link">Saiba mais →</span>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">📅</div>
            <h3>Linha do Tempo</h3>
            <p>Organize cronologicamente suas memórias e navegue através do tempo.</p>
            <div class="feature-card__hover">
              <span class="feature-card__link">Saiba mais →</span>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">🌍</div>
            <h3>Compartilhe</h3>
            <p>Convide amigos e familiares para visitarem seu museu pessoal.</p>
            <div class="feature-card__hover">
              <span class="feature-card__link">Saiba mais →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Examples Section -->
    <section class="home__examples">
      <div class="container">
        <div class="section-header">
          <h2>Exemplos de Salas</h2>
          <p>Inspire-se com histórias reais compartilhadas em nossa plataforma</p>
        </div>
        
        <div class="examples-grid">
          <div class="example-card">
            <div class="example-card__image example-card__image--1">
              <div class="image-placeholder">
                <span>📸</span>
                <p>Memórias em Fotos</p>
              </div>
            </div>
            <div class="example-card__content">
              <h3>"Diário de uma avó nordestina"</h3>
              <p>Uma jornada através de gerações, contada com fotos antigas e áudios emocionantes.</p>
              <div class="example-card__meta">
                <span>📍 Ceará, Brasil</span>
                <span>📅 1950-2023</span>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-card__image example-card__image--2">
              <div class="image-placeholder">
                <span>💼</span>
                <p>Conquistas Profissionais</p>
              </div>
            </div>
            <div class="example-card__content">
              <h3>"Minha transição de carreira"</h3>
              <p>A história de uma mudança de vida através de certificados e momentos marcantes.</p>
              <div class="example-card__meta">
                <span>💼 Profissional</span>
                <span>📅 2020-2023</span>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-card__image example-card__image--3">
              <div class="image-placeholder">
                <span>✈️</span>
                <p>Aventuras pelo Mundo</p>
              </div>
            </div>
            <div class="example-card__content">
              <h3>"Viagem dos sonhos"</h3>
              <p>Uma galeria multimídia com lugares visitados e trilha sonora personalizada.</p>
              <div class="example-card__meta">
                <span>✈️ América do Sul</span>
                <span>📅 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="home__cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Comece a Contar Sua História</h2>
          <p>Crie seu museu virtual gratuitamente e preserve suas memórias mais especiais.</p>
          <router-link 
            to="/login" 
            class="btn btn--primary btn--lg"
          >
            Criar Minha Primeira Sala
          </router-link>
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
  background-color: $color-background;
}

// Hero Section
.home__hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  .hero__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, $color-primary, $color-secondary);
  }

  .hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba($color-primary, 0.3),
      rgba($color-secondary, 0.3)
    );
  }

  .hero__pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('@/assets/images/pattern.svg') center/30px;
    opacity: 0.1;
  }

  .hero__content {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: $spacing-xl 0;
  }

  .hero__title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: $spacing-lg;

    &-line {
      display: block;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.8s forwards;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }
    }
  }

  .hero__subtitle {
    font-size: clamp(1.2rem, 4vw, 1.8rem);
    font-family: $font-family-heading;
    font-style: italic;
    opacity: 0.9;
    margin-bottom: $spacing-xl;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s forwards 0.4s;
  }

  .hero__cta {
    margin-bottom: $spacing-xl * 2;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s forwards 0.6s;

    .btn--lg {
      font-size: 1.2rem;
      padding: $spacing-md $spacing-xl;
      display: inline-flex;
      align-items: center;
      gap: $spacing-sm;

      .btn__icon {
        transition: transform 0.3s ease;
      }

      &:hover .btn__icon {
        transform: translateX(5px);
      }
    }
  }

  .hero__stats {
    display: flex;
    justify-content: center;
    gap: $spacing-xl;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s forwards 0.8s;

    @include sm {
      flex-direction: column;
      gap: $spacing-lg;
    }
  }
}

.stat-item {
  text-align: center;

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: $spacing-xs;
  }

  .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
  }
}

// Features Section
.home__features {
  padding: $spacing-xl * 3 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: $spacing-xl * 2;

  h2 {
    font-size: 2.5rem;
    color: $color-primary;
    margin-bottom: $spacing-sm;
  }

  p {
    font-size: 1.2rem;
    color: $color-text-light;
  }
}

.features-grid {
  display: grid;
  gap: $spacing-xl;
  
  @include sm {
    grid-template-columns: 1fr;
  }
  
  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include lg {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  background: white;
  border-radius: $border-radius-lg;
  padding: $spacing-xl;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  @include shadow('sm');

  &:hover {
    transform: translateY(-5px);
    @include shadow('md');

    .feature-card__hover {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__icon {
    font-size: 2.5rem;
    margin-bottom: $spacing-md;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: $spacing-md;
    color: $color-primary;
  }

  p {
    color: $color-text-light;
    line-height: 1.6;
    margin-bottom: $spacing-md;
  }

  &__hover {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $spacing-md;
    background: linear-gradient(
      to top,
      white 60%,
      rgba(white, 0)
    );
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }

  &__link {
    color: $color-primary;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

// Examples Section
.home__examples {
  padding: $spacing-xl * 3 0;
  background: $color-background;
}

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
    grid-template-columns: repeat(3, 1fr);
  }
}

.example-card {
  background: white;
  border-radius: $border-radius-lg;
  overflow: hidden;
  transition: transform 0.3s ease;
  @include shadow('sm');

  &:hover {
    transform: translateY(-5px);
    @include shadow('md');

    .image-placeholder {
      background: rgba(black, 0.2);
    }
  }

  &__image {
    height: 200px;
    overflow: hidden;
    position: relative;

    &--1 {
      background: linear-gradient(135deg, #FF9966, #FF5E62);
    }

    &--2 {
      background: linear-gradient(135deg, #4facfe, #00f2fe);
    }

    &--3 {
      background: linear-gradient(135deg, #43e97b, #38f9d7);
    }

    .image-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      @include flex-center;
      flex-direction: column;
      gap: $spacing-sm;
      padding: $spacing-md;
      background: rgba(black, 0.1);
      transition: background 0.3s ease;
      
      span {
        font-size: 3rem;
      }

      p {
        color: white;
        font-size: 1.1rem;
        font-weight: 500;
        text-shadow: 0 2px 4px rgba(black, 0.2);
        margin: 0;
      }
    }
  }

  &__content {
    padding: $spacing-lg;

    h3 {
      font-size: 1.3rem;
      margin-bottom: $spacing-sm;
      color: $color-primary;
    }

    p {
      color: $color-text-light;
      line-height: 1.6;
      margin-bottom: $spacing-md;
    }
  }

  &__meta {
    display: flex;
    gap: $spacing-md;
    color: $color-text-light;
    font-size: 0.9rem;
  }
}

// CTA Section
.home__cta-section {
  padding: $spacing-xl * 3 0;
  background: linear-gradient(135deg, $color-primary, $color-secondary);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('@/assets/images/pattern.svg') center/30px;
    opacity: 0.1;
  }

  .cta-content {
    position: relative;
    z-index: 1;

    h2 {
      font-size: 2.5rem;
      margin-bottom: $spacing-md;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: $spacing-xl;
      opacity: 0.9;
    }

    .btn--lg {
      font-size: 1.2rem;
      padding: $spacing-md $spacing-xl;
    }
  }
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>