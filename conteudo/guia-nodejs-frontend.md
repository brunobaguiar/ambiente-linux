# Guia de Instalação e Configuração do Node.js e Ferramentas Frontend

Este guia fornece instruções detalhadas para instalar e configurar o Node.js e ferramentas frontend populares (React, Vite, Tailwind CSS) no Ubuntu 22.04 LTS, criando um ambiente ideal para desenvolvimento web moderno.

## Instalação do Node.js e NPM

Existem três métodos principais para instalar o Node.js no Ubuntu 22.04. Recomendamos o uso do NVM (Node Version Manager), pois permite gerenciar facilmente múltiplas versões do Node.js.

### Método 1: Instalação via NVM (Recomendado)

O NVM (Node Version Manager) permite instalar e gerenciar múltiplas versões do Node.js, facilitando a troca entre versões conforme necessário para diferentes projetos.

#### Instalação do NVM

```bash
# Instalar dependências necessárias
sudo apt update
sudo apt install -y curl wget build-essential

# Baixar e executar o script de instalação do NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Carregar o NVM no shell atual
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

#### Verificação da Instalação do NVM

```bash
# Verificar se o NVM foi instalado corretamente
nvm --version
```

#### Instalação do Node.js via NVM

```bash
# Listar as versões LTS disponíveis do Node.js
nvm ls-remote --lts

# Instalar a versão LTS mais recente
nvm install --lts

# Alternativamente, instalar uma versão específica
# nvm install 20.18.0

# Definir a versão instalada como padrão
nvm alias default node
```

#### Verificação da Instalação do Node.js e NPM

```bash
# Verificar a versão do Node.js
node --version

# Verificar a versão do NPM
npm --version
```

### Método 2: Instalação via NodeSource

O NodeSource mantém repositórios atualizados do Node.js para distribuições Linux.

```bash
# Instalar dependências
sudo apt update
sudo apt install -y ca-certificates curl gnupg

# Adicionar a chave GPG do NodeSource
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

# Adicionar o repositório do Node.js 20.x (LTS)
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list

# Atualizar e instalar o Node.js
sudo apt update
sudo apt install -y nodejs

# Verificar a instalação
node --version
npm --version
```

### Método 3: Instalação via Repositório Padrão do Ubuntu

Este método é o mais simples, mas geralmente fornece versões mais antigas do Node.js.

```bash
# Atualizar o sistema
sudo apt update

# Instalar o Node.js e o NPM
sudo apt install -y nodejs npm

# Verificar a instalação
node --version
npm --version
```

## Configuração do NPM

### Atualização do NPM

```bash
# Atualizar o NPM para a versão mais recente
npm install -g npm@latest
```

### Configuração de Diretório Global sem Permissões de Root

```bash
# Criar diretório para pacotes globais do NPM
mkdir -p ~/.npm-global

# Configurar o NPM para usar o novo diretório
npm config set prefix '~/.npm-global'

# Adicionar o diretório ao PATH
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc

# Recarregar o shell
source ~/.bashrc
```

### Instalação de Ferramentas Globais Úteis

```bash
# Instalar ferramentas de desenvolvimento úteis
npm install -g yarn         # Gerenciador de pacotes alternativo
npm install -g pnpm         # Gerenciador de pacotes rápido e eficiente
npm install -g http-server  # Servidor HTTP simples
npm install -g nodemon      # Monitor de alterações para desenvolvimento
npm install -g typescript   # Superset tipado do JavaScript
npm install -g eslint       # Linter para JavaScript/TypeScript
npm install -g prettier     # Formatador de código
```

## Configuração de Ferramentas Frontend

### React com Vite

O Vite é um bundler e servidor de desenvolvimento extremamente rápido, ideal para projetos React modernos.

#### Criação de um Novo Projeto React com Vite

```bash
# Criar um novo projeto React com Vite
npm create vite@latest meu-app-react -- --template react

# Navegar para o diretório do projeto
cd meu-app-react

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

#### Adição do TypeScript (Opcional)

```bash
# Criar um novo projeto React com TypeScript
npm create vite@latest meu-app-react-ts -- --template react-ts
```

### Tailwind CSS

O Tailwind CSS é um framework CSS utilitário que permite criar designs personalizados sem sair do HTML.

#### Instalação do Tailwind CSS em um Projeto Vite

```bash
# Navegar para o diretório do projeto
cd meu-app-react

# Instalar Tailwind CSS e suas dependências
npm install -D tailwindcss postcss autoprefixer

# Gerar os arquivos de configuração do Tailwind
npx tailwindcss init -p
```

#### Configuração do Tailwind CSS

Edite o arquivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Adicione as diretivas do Tailwind ao seu arquivo CSS principal (`src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Outras Ferramentas Frontend Populares

#### Instalação do Next.js

```bash
# Criar um novo projeto Next.js
npx create-next-app@latest meu-app-next

# Navegar para o diretório do projeto
cd meu-app-next

# Iniciar o servidor de desenvolvimento
npm run dev
```

#### Instalação do Vue.js

```bash
# Criar um novo projeto Vue.js com Vite
npm create vite@latest meu-app-vue -- --template vue

# Navegar para o diretório do projeto
cd meu-app-vue

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

## Gerenciamento de Versões do Node.js com NVM

Se você instalou o Node.js via NVM, pode facilmente alternar entre diferentes versões.

### Comandos Úteis do NVM

```bash
# Listar todas as versões instaladas
nvm ls

# Listar todas as versões disponíveis para instalação
nvm ls-remote

# Instalar uma versão específica
nvm install 18.19.1

# Usar uma versão específica
nvm use 18.19.1

# Definir uma versão como padrão
nvm alias default 20.18.0

# Usar a versão mais recente
nvm use node

# Usar a versão LTS mais recente
nvm use --lts
```

### Configuração de Versão por Projeto

Você pode especificar a versão do Node.js para um projeto específico criando um arquivo `.nvmrc`:

```bash
# Criar arquivo .nvmrc com a versão atual
node -v > .nvmrc

# Ou especificar manualmente
echo "20.18.0" > .nvmrc
```

Para usar a versão especificada no arquivo `.nvmrc`:

```bash
# Navegar para o diretório do projeto
cd meu-projeto

# Usar a versão especificada no .nvmrc
nvm use
```

## Boas Práticas para Projetos Node.js

### Estrutura de Diretórios Recomendada

```
meu-projeto/
├── node_modules/        # Dependências (gerado automaticamente, ignorado no git)
├── public/              # Arquivos estáticos públicos
├── src/                 # Código-fonte
│   ├── assets/          # Recursos (imagens, fontes, etc.)
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas ou rotas
│   ├── styles/          # Arquivos CSS/SCSS
│   ├── utils/           # Funções utilitárias
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Ponto de entrada
├── .eslintrc.js         # Configuração do ESLint
├── .gitignore           # Arquivos ignorados pelo Git
├── .nvmrc               # Versão do Node.js para o projeto
├── index.html           # Arquivo HTML principal (para projetos Vite)
├── package.json         # Dependências e scripts
├── package-lock.json    # Versões exatas das dependências
├── README.md            # Documentação
├── tailwind.config.js   # Configuração do Tailwind (se aplicável)
└── vite.config.js       # Configuração do Vite (se aplicável)
```

### Arquivo .gitignore Recomendado

Crie um arquivo `.gitignore` na raiz do seu projeto:

```
# Dependências
node_modules
.pnp
.pnp.js

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Diretórios de build
dist
dist-ssr
build
*.local

# Arquivos de ambiente
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Editor
.vscode/*
!.vscode/extensions.json
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Sistema operacional
.DS_Store
Thumbs.db
```

## Solução de Problemas Comuns

### Erro de Permissão ao Instalar Pacotes Globais

Se você encontrar erros de permissão ao instalar pacotes globais:

```bash
# Opção 1: Usar a configuração de diretório global sem permissões de root
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Opção 2: Corrigir permissões (não recomendado para ambientes compartilhados)
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

### Problemas com Versões do Node.js

Se um projeto requer uma versão específica do Node.js:

```bash
# Se estiver usando NVM
nvm install $(cat .nvmrc)
nvm use

# Se não estiver usando NVM, considere instalá-lo
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Limpeza de Cache do NPM

Se encontrar problemas com pacotes corrompidos:

```bash
# Limpar o cache do NPM
npm cache clean --force

# Verificar o cache
npm cache verify
```

## Próximos Passos

Após configurar o Node.js e as ferramentas frontend, você estará pronto para instalar e configurar o Docker e o PostgreSQL. Consulte o guia "Instalação e Configuração do Docker e PostgreSQL" para continuar.
