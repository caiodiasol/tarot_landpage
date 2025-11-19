# 🌙 Tarot Raissa - Landing Page

Landing page moderna e responsiva para a taróloga Raissa, desenvolvida com foco em performance, animações fluidas e experiência do usuário excepcional.

## 📋 Sobre o Projeto

Site institucional apresentando os serviços de leitura de Tarot da taróloga Raissa, incluindo informações sobre atendimentos, sobre a profissional, loja de produtos e formulário de contato. O projeto foi desenvolvido com atenção especial à performance em dispositivos móveis e otimizações de carregamento.

## 🚀 Tecnologias Principais

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router e Server Components
- **[React 19](https://react.dev/)** - Biblioteca UI com React Compiler
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Three.js](https://threejs.org/)** - Biblioteca WebGL para efeitos 3D
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI baseados em Radix UI
- **[React Bits](https://reactbits.dev/)** - Componentes adicionais (incluindo LiquidEther background)
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários

## ✨ Features

- 🎨 **Background Animado** - Efeito líquido interativo (LiquidEther do React Bits) usando Three.js e WebGL
- 📱 **Totalmente Responsivo** - Otimizado para mobile, tablet e desktop
- 🌓 **Tema Claro/Escuro** - Suporte a modo claro e escuro
- ⚡ **Performance Otimizada** - Lazy loading, code splitting e otimizações específicas para mobile
- 🎭 **Animações Suaves** - Transições e animações com Framer Motion
- 🖼️ **Galeria Interativa** - Carrossel infinito com imagens
- 📝 **Formulário de Contato** - Validação com Zod e React Hook Form
- 🎯 **SEO Otimizado** - Metadata e estrutura semântica

## 🛠️ Estrutura do Projeto

```
tarot-landing/
├── src/
│   ├── app/                    # App Router (Next.js 16)
│   │   ├── page.tsx           # Página Home
│   │   ├── sobre/             # Página Sobre
│   │   ├── atendimentos/      # Página Atendimentos
│   │   ├── loja/              # Página Loja
│   │   └── contato/           # Página Contato
│   ├── components/
│   │   ├── animations/        # Componentes de animação
│   │   ├── background/        # Background WebGL (LiquidEther do React Bits)
│   │   ├── layout/            # Header e Footer
│   │   ├── sections/          # Seções da home
│   │   ├── theme/             # Toggle de tema
│   │   └── ui/                # Componentes UI (shadcn)
│   └── lib/                   # Utilitários
└── public/                     # Assets estáticos
```

## 🚦 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/caiodiasol/tarot_landpage.git

# Entre no diretório
cd tarot-landing

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 🎯 Otimizações Implementadas

- **Lazy Loading** - Componentes carregados sob demanda
- **Code Splitting** - Dynamic imports para reduzir bundle inicial
- **Otimização Mobile** - Resolução adaptativa do background e blur reduzido
- **Performance GPU** - Uso de `will-change` e `transform3d` para aceleração por hardware
- **Intersection Observer** - Animações só iniciam quando visíveis

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## 🎨 Design System

O projeto utiliza:
- **Cores**: Paleta roxa/violeta com suporte a tema claro/escuro
- **Tipografia**: Geist Sans e Geist Mono (Vercel)
- **Componentes**: Baseados em shadcn/ui com customizações
- **Animações**: Framer Motion para transições suaves
- **Background**: LiquidEther do React Bits (Three.js/WebGL)

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 👤 Autor

**Caio Dias**
- GitHub: [@caiodiasol](https://github.com/caiodiasol)

---

Desenvolvido com ❤️ usando Next.js e React
