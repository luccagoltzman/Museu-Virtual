# 🤝 Guia de Contribuição

Obrigado por considerar contribuir com o Museu Virtual de Memórias! Este documento fornece as diretrizes para contribuir com o projeto.

## 📝 Processo de Contribuição

1. **Fork o repositório**
   - Crie um fork do projeto para sua conta
   - Clone o fork localmente

2. **Crie uma branch**
   - Use um nome descritivo
   - Exemplo: `feature/timeline-animation` ou `fix/login-validation`

3. **Desenvolva**
   - Siga os padrões de código
   - Mantenha o código limpo e documentado
   - Teste suas alterações

4. **Commit**
   - Use mensagens claras e descritivas
   - Siga o padrão de commits convencionais:
     ```
     feat: adiciona animação na timeline
     fix: corrige validação do login
     docs: atualiza README
     style: formata código
     refactor: reorganiza componente X
     test: adiciona testes para Y
     ```

5. **Push e Pull Request**
   - Push para seu fork
   - Abra um Pull Request com descrição clara
   - Referencie issues relacionadas

## 🎨 Padrões de Código

### Vue Components
```vue
<template>
  <!-- Use kebab-case para elementos customizados -->
  <my-component></my-component>
  
  <!-- Props com kebab-case no template -->
  <my-component
    :my-prop="value"
    @custom-event="handler"
  />
</template>

<script setup>
// Imports organizados
import { ref, computed } from 'vue'
import MyComponent from './MyComponent.vue'

// Props com camelCase no script
const props = defineProps({
  myProp: {
    type: String,
    required: true
  }
})

// Emits declarados
const emit = defineEmits(['customEvent'])
</script>

<style lang="scss" scoped>
// SCSS organizado com BEM
.component {
  &__element {
    // ...
  }

  &--modifier {
    // ...
  }
}
</style>
```

### SCSS
- Use BEM para nomenclatura de classes
- Mantenha a especificidade baixa
- Organize com partials
- Use variáveis para valores reutilizáveis

### JavaScript
- Use ES6+
- Prefira funções puras
- Documente funções complexas
- Use tipos quando possível

## 🧪 Testes

- Escreva testes para novas funcionalidades
- Mantenha a cobertura de testes existente
- Use testes unitários para componentes
- Teste cenários de erro

## 📚 Documentação

- Atualize o README quando necessário
- Documente novas funcionalidades
- Mantenha a documentação atualizada
- Use JSDoc para funções complexas

## ⚡ Performance

- Otimize imagens
- Minimize bundles
- Use lazy loading
- Evite renders desnecessários

## 🚫 O que evitar

- Breaking changes sem discussão
- Código não testado
- Alterações não documentadas
- Commits grandes e não relacionados

## 📝 Pull Request Checklist

- [ ] Testes passando
- [ ] Código lintado
- [ ] Documentação atualizada
- [ ] Branch atualizada com main
- [ ] Commits organizados
- [ ] Descrição clara do PR

## 🤔 Dúvidas?

Abra uma issue para discussão ou entre em contato com os mantenedores.

---

<p align="center">
  Sua contribuição é muito importante!
</p>