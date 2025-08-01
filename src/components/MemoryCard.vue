<template>
  <div class="memory-card" :class="{ 'is-editing': isEditing }">
    <div class="memory-card__content">
      <!-- Imagem -->
      <img 
        v-if="memoria.tipo === 'imagem'" 
        :src="memoria.url" 
        :alt="memoria.titulo"
        class="memory-card__image"
      >
      
      <!-- Vídeo -->
      <video 
        v-else-if="memoria.tipo === 'video'"
        :src="memoria.url"
        controls
        class="memory-card__video"
      ></video>
      
      <!-- Áudio -->
      <audio 
        v-else-if="memoria.tipo === 'audio'"
        :src="memoria.url"
        controls
        class="memory-card__audio"
      ></audio>
      
      <!-- Texto -->
      <div 
        v-else
        class="memory-card__text"
        v-html="memoria.conteudo"
      ></div>

      <div class="memory-card__info">
        <h3 class="memory-card__title">{{ memoria.titulo }}</h3>
        <p class="memory-card__date">{{ formatDate(memoria.data) }}</p>
        <p class="memory-card__description">{{ memoria.descricao }}</p>
      </div>
    </div>

    <div v-if="isEditing" class="memory-card__actions">
      <button @click="$emit('edit', memoria)" class="btn btn--secondary">
        Editar
      </button>
      <button @click="$emit('delete', memoria.id)" class="btn btn--accent">
        Excluir
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  memoria: {
    type: Object,
    required: true
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'delete'])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components' as *;
@use 'sass:color';

.memory-card {
  @include card-base;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &__content {
    position: relative;
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: $border-radius-sm;
  }

  &__video,
  &__audio {
    width: 100%;
    margin-bottom: $spacing-sm;
  }

  &__text {
    padding: $spacing-md;
    font-size: 1.1em;
    line-height: 1.6;
  }

  &__info {
    padding: $spacing-md;
  }

  &__title {
    font-family: $font-family-heading;
    font-size: 1.5em;
    margin-bottom: $spacing-xs;
  }

  &__date {
    color: $color-text-light;
    font-size: 0.9em;
    margin-bottom: $spacing-sm;
  }

  &__description {
    line-height: 1.4;
  }

  &__actions {
    display: flex;
    gap: $spacing-sm;
    padding: $spacing-md;
    border-top: 1px solid $color-border;
  }

  &.is-editing {
    border: 2px dashed $color-secondary;
  }
}
</style>