# 🏛️ Museu Virtual de Memórias

> "Cada lembrança merece seu próprio espaço"

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Pinia](https://img.shields.io/badge/Pinia-Yellow?style=for-the-badge&logo=vue.js&logoColor=black)](https://pinia.vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Uma plataforma onde cada pessoa pode criar seu próprio museu digital de memórias, organizando fotos, vídeos, áudios e textos em uma experiência imersiva e interativa.

## ✨ Funcionalidades

### 🎯 Implementadas
- Interface moderna e responsiva
- Sistema de navegação fluido
- Animações suaves e interativas
- Layout adaptativo para diferentes dispositivos
- Design system consistente com SCSS
- Gerenciamento de estado com Pinia
- Roteamento com Vue Router

### 🚀 Próximos Passos
- [ ] Autenticação de usuários
- [ ] Upload de mídias
- [ ] Criação de salas
- [ ] Timeline interativa
- [ ] Compartilhamento de salas
- [ ] Integração com backend

## 🛠️ Tecnologias

- **Vue.js 3** - Framework progressivo para construção de interfaces
- **Vite** - Build tool e dev server ultrarrápido
- **Pinia** - Gerenciamento de estado
- **Vue Router** - Roteamento oficial do Vue.js
- **SCSS** - Pré-processador CSS
- **GSAP** - Animações avançadas
- **Axios** - Cliente HTTP

## 🎨 Design System

### Cores
```scss
$color-primary: #2C3E50    // Azul escuro
$color-secondary: #3498DB  // Azul claro
$color-accent: #E74C3C     // Vermelho
$color-background: #F8F9FA // Cinza claro
```

### Tipografia
```scss
$font-family-base: 'Roboto', sans-serif
$font-family-heading: 'Playfair Display', serif
```

### Componentes
- **Cards** - Containers para conteúdo com sombras e hover effects
- **Botões** - Sistema de botões com estados e variantes
- **Inputs** - Campos de formulário estilizados
- **Timeline** - Visualização cronológica de memórias

## 📦 Estrutura do Projeto

\`\`\`
src/
├── assets/
│   └── scss/
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── main.scss
├── components/
│   ├── MemoryCard.vue
│   └── Timeline.vue
├── views/
│   ├── HomeView.vue
│   ├── LoginRegister.vue
│   ├── Dashboard.vue
│   ├── CreateSala.vue
│   ├── SalaEditor.vue
│   └── SalaView.vue
├── stores/
│   ├── auth.js
│   └── salas.js
└── router/
    └── index.js
\`\`\`

## 🚀 Como Executar

1. **Clone o repositório**
   \`\`\`bash
   git clone [https://github.com/luccagoltzman/Museu-Virtual.git]
   cd museu-virtual
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   \`\`\`

3. **Execute o servidor de desenvolvimento**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Acesse a aplicação**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a diferentes tamanhos de tela:

- **Mobile** (< 576px)
- **Tablet** (≥ 768px)
- **Desktop** (≥ 992px)
- **Large Desktop** (≥ 1200px)

## 🎯 Objetivos do Projeto

1. **Valorização de Memórias**
   - Criar um espaço digital para preservar histórias pessoais
   - Facilitar o compartilhamento de momentos especiais

2. **Experiência do Usuário**
   - Interface intuitiva e acolhedora
   - Navegação fluida e agradável
   - Animações suaves e significativas

3. **Tecnologia**
   - Código limpo e modular
   - Performance otimizada
   - Manutenibilidade

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Por favor, leia o [guia de contribuição](CONTRIBUTING.md) primeiro.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Vue.js Team](https://vuejs.org/)
- [Vite Team](https://vitejs.dev/)
- [Pinia Team](https://pinia.vuejs.org/)

---

<p align="center">
  Feito para preservar memórias especiais
</p>