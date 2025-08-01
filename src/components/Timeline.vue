<template>
  <div class="timeline" :class="{ 'timeline--vertical': isVertical }">
    <div class="timeline__line"></div>
    
    <div 
      v-for="memoria in memoriasSorted" 
      :key="memoria.id"
      class="timeline__item"
      :class="{ 'timeline__item--right': isVertical && isEven(memoria) }"
    >
      <div class="timeline__point"></div>
      <div class="timeline__content">
        <MemoryCard 
          :memoria="memoria"
          :is-editing="isEditing"
          @edit="$emit('edit', memoria)"
          @delete="$emit('delete', memoria.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MemoryCard from './MemoryCard.vue'

const props = defineProps({
  memorias: {
    type: Array,
    required: true
  },
  isVertical: {
    type: Boolean,
    default: false
  },
  isEditing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'delete'])

// Ordena as memórias por data
const memoriasSorted = computed(() => {
  return [...props.memorias].sort((a, b) => new Date(a.data) - new Date(b.data))
})

// Determina se a memória deve ficar à direita na timeline vertical
const isEven = (memoria) => {
  return props.memorias.indexOf(memoria) % 2 === 0
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/components' as *;
@use 'sass:color';

.timeline {
  position: relative;
  padding: $spacing-xl 0;

  // Timeline horizontal
  display: flex;
  gap: $spacing-xl;
  overflow-x: auto;
  padding-bottom: $spacing-xl * 2;

  &__line {
    position: absolute;
    background-color: $color-secondary;
    
    // Linha horizontal por padrão
    height: 2px;
    width: 100%;
    bottom: $spacing-xl;
  }

  &__item {
    position: relative;
    min-width: 300px;
    
    &:hover .timeline__point {
      transform: scale(1.2);
    }
  }

  &__point {
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: $color-secondary;
    border-radius: 50%;
    bottom: -$spacing-xl;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 0.3s ease;
    z-index: 1;
  }

  // Modificador para timeline vertical
  &--vertical {
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 $spacing-xl;

    .timeline__line {
      width: 2px;
      height: 100%;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      bottom: auto;
    }

    .timeline__item {
      margin: $spacing-xl 0;
      width: 45%;
      
      &--right {
        margin-left: auto;

        .timeline__point {
          left: -$spacing-xl - 8px;
        }
      }

      &:not(.timeline__item--right) .timeline__point {
        right: -$spacing-xl - 8px;
        left: auto;
      }
    }
  }
}

// Responsividade
@include md {
  .timeline--vertical {
    .timeline__item {
      width: 42%;
    }
  }
}

@include sm {
  .timeline--vertical {
    padding: 0 $spacing-md;
    
    .timeline__line {
      left: $spacing-md;
    }
    
    .timeline__item {
      width: calc(100% - #{$spacing-xl * 2});
      margin-left: $spacing-xl * 2 !important;
      
      .timeline__point {
        left: -$spacing-xl - 8px !important;
      }
    }
  }
}
</style>