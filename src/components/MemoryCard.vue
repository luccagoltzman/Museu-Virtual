&lt;template>
  &lt;div class="memory-card" :class="{ 'is-editing': isEditing }">
    &lt;div class="memory-card__content">
      <!-- Imagem -->
      &lt;img 
        v-if="memoria.tipo === 'imagem'" 
        :src="memoria.url" 
        :alt="memoria.titulo"
        class="memory-card__image"
      >
      
      <!-- Vídeo -->
      &lt;video 
        v-else-if="memoria.tipo === 'video'"
        :src="memoria.url"
        controls
        class="memory-card__video"
      >&lt;/video>
      
      <!-- Áudio -->
      &lt;audio 
        v-else-if="memoria.tipo === 'audio'"
        :src="memoria.url"
        controls
        class="memory-card__audio"
      >&lt;/audio>
      
      <!-- Texto -->
      &lt;div 
        v-else
        class="memory-card__text"
        v-html="memoria.conteudo"
      >&lt;/div>

      &lt;div class="memory-card__info">
        &lt;h3 class="memory-card__title">{{ memoria.titulo }}&lt;/h3>
        &lt;p class="memory-card__date">{{ formatDate(memoria.data) }}&lt;/p>
        &lt;p class="memory-card__description">{{ memoria.descricao }}&lt;/p>
      &lt;/div>
    &lt;/div>

    &lt;div v-if="isEditing" class="memory-card__actions">
      &lt;button @click="$emit('edit', memoria)" class="btn btn--secondary">
        Editar
      &lt;/button>
      &lt;button @click="$emit('delete', memoria.id)" class="btn btn--accent">
        Excluir
      &lt;/button>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script setup>
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
&lt;/script>

&lt;style lang="scss" scoped>
@import '@/assets/scss/variables';
@import '@/assets/scss/mixins';

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
&lt;/style>