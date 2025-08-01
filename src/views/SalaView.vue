<template>
  <div 
    class="sala-view"
    :class="`theme--${currentSala?.tema || 'classico'}`"
  >
    <div v-if="salasStore.loading" class="loading">
      Carregando sala...
    </div>

    <div v-else-if="salasStore.error" class="error-message">
      {{ salasStore.error }}
    </div>

    <div v-else-if="currentSala" class="sala-content">
      <header class="sala-header">
        <div class="container">
          <h1>{{ currentSala.titulo }}</h1>
          <p class="sala-description">{{ currentSala.descricao }}</p>
        </div>
      </header>

      <main class="container">
        <div class="view-controls">
          <button 
            class="btn"
            :class="{ 'btn--primary': viewMode === 'timeline' }"
            @click="viewMode = 'timeline'"
          >
            Linha do Tempo
          </button>
          <button 
            class="btn"
            :class="{ 'btn--primary': viewMode === 'gallery' }"
            @click="viewMode = 'gallery'"
          >
            Galeria
          </button>
        </div>

        <!-- Modo Timeline -->
        <Timeline 
          v-if="viewMode === 'timeline'"
          :memorias="currentSala.memorias"
          :is-vertical="true"
        />

        <!-- Modo Galeria -->
        <div 
          v-else
          class="memories-gallery"
        >
          <div 
            v-for="memoria in currentSala.memorias"
            :key="memoria.id"
            class="gallery-item"
            @click="openMemoria(memoria)"
          >
            <MemoryCard :memoria="memoria" />
          </div>
        </div>
      </main>

      <!-- Modal de Memória -->
      <div 
        v-if="selectedMemoria"
        class="memoria-modal"
        @click="selectedMemoria = null"
      >
        <div 
          class="memoria-modal__content"
          @click.stop
        >
          <button 
            class="memoria-modal__close"
            @click="selectedMemoria = null"
          >
            ×
          </button>
          
          <MemoryCard 
            :memoria="selectedMemoria"
            class="memoria-modal__card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSalasStore } from '@/stores/salas'
import Timeline from '@/components/Timeline.vue'
import MemoryCard from '@/components/MemoryCard.vue'

const route = useRoute()
const salasStore = useSalasStore()
const { currentSala } = storeToRefs(salasStore)

const viewMode = ref('timeline')
const selectedMemoria = ref(null)

onMounted(async () => {
  await salasStore.fetchSalaBySlug(route.params.slug)
})

const openMemoria = (memoria) => {
  selectedMemoria.value = memoria
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/views' as *;
@use 'sass:color';

.sala-view {
  min-height: 100vh;

  // Temas
  &.theme--classico {
    background-color: $color-background;
    
    .sala-header {
      background: linear-gradient(rgba($color-primary, 0.8), rgba($color-primary, 0.8)),
                  url('@/assets/images/classic-bg.jpg') center/cover;
    }
  }

  &.theme--moderno {
    background-color: white;
    
    .sala-header {
      background: $color-primary;
    }
  }

  &.theme--vintage {
    background-color: #f4f1ea;
    
    .sala-header {
      background: linear-gradient(rgba(brown, 0.8), rgba(brown, 0.8)),
                  url('@/assets/images/vintage-bg.jpg') center/cover;
    }
  }

  &.theme--minimalista {
    background-color: white;
    
    .sala-header {
      background: black;
    }
  }
}

.sala-header {
  padding: $spacing-xl * 2 0;
  color: white;
  text-align: center;
  margin-bottom: $spacing-xl;

  h1 {
    font-size: 3em;
    margin-bottom: $spacing-md;
  }
}

.sala-description {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.6;
}

.view-controls {
  display: flex;
  justify-content: center;
  gap: $spacing-md;
  margin-bottom: $spacing-xl;
}

.memories-gallery {
  display: grid;
  gap: $spacing-xl;
  
  @include sm {
    grid-template-columns: repeat(1, 1fr);
  }
  
  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include lg {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
}

.memoria-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(black, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-xl;
  z-index: 1000;

  &__content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    background: white;
    border-radius: $border-radius-lg;
    @include shadow('lg');
  }

  &__close {
    position: absolute;
    top: $spacing-sm;
    right: $spacing-sm;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(black, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    @include flex-center;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(black, 0.7);
    }
  }

  &__card {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>