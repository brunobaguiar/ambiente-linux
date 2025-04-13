# Informações sobre Ferramentas de Desenvolvimento

## Python e Ferramentas Relacionadas

### Python
- Versão recomendada: Python 3.10 ou superior (Ubuntu 22.04 vem com Python 3.10.6)
- Instalação básica: `sudo apt install python3 python3-pip python3-venv`
- Pacotes de desenvolvimento: `sudo apt install python3-dev build-essential`

### Ambientes Virtuais (venv)
- Ferramenta padrão para criar ambientes virtuais isolados
- Instalação: Incluída no pacote `python3-venv`
- Uso básico: `python3 -m venv nome_do_ambiente`
- Ativação: `source nome_do_ambiente/bin/activate`

### Pip
- Gerenciador de pacotes padrão do Python
- Instalação: Incluída no pacote `python3-pip`
- Atualização: `python3 -m pip install --upgrade pip`
- Uso básico: `pip install nome_do_pacote`

### Pipx
- Ferramenta para instalar e executar aplicativos Python em ambientes isolados
- Instalação: `python3 -m pip install --user pipx` e `python3 -m pipx ensurepath`
- Uso básico: `pipx install nome_do_pacote`

### Jupyter Lab
- Ambiente interativo para desenvolvimento em Python, R, Julia e outras linguagens
- Instalação via pip: `pip install jupyterlab`
- Instalação via pipx: `pipx install jupyterlab`
- Extensões de IA disponíveis:
  - jupyterlab-lsp: Suporte a Language Server Protocol
  - jupyterlab-ai-chat: Interface de chat com IA
  - jupyterlab-code-translator: Tradução de código entre linguagens

## Node.js e NPM

### Node.js
- Versões disponíveis: LTS (recomendada para a maioria dos usuários) e Current
- Métodos de instalação:
  1. Via repositório padrão do Ubuntu (versão mais antiga)
  2. Via NodeSource (versões mais recentes)
  3. Via NVM (Node Version Manager) - recomendado para desenvolvedores

### NVM (Node Version Manager)
- Ferramenta para gerenciar múltiplas versões do Node.js
- Instalação: 
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  ```
- Uso básico:
  - Listar versões disponíveis: `nvm ls-remote`
  - Instalar versão específica: `nvm install 20.18.0` (LTS atual)
  - Usar versão específica: `nvm use 20.18.0`
  - Definir versão padrão: `nvm alias default 20.18.0`

### NPM (Node Package Manager)
- Instalado automaticamente com o Node.js
- Atualização: `npm install -g npm@latest`
- Ferramentas frontend populares:
  - React: `npm create vite@latest my-app -- --template react`
  - Vite: `npm create vite@latest`
  - Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`

## Docker e Docker Compose

### Docker
- Plataforma para desenvolvimento, envio e execução de aplicações em contêineres
- Instalação via repositório oficial:
  ```bash
  # Adicionar chave GPG oficial do Docker
  sudo apt-get update
  sudo apt-get install ca-certificates curl gnupg
  sudo install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  sudo chmod a+r /etc/apt/keyrings/docker.gpg

  # Adicionar repositório
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

  # Instalar Docker Engine
  sudo apt-get update
  sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
  ```

### Docker Compose
- Ferramenta para definir e executar aplicações Docker multi-contêiner
- Instalação como plugin do Docker (método recomendado):
  ```bash
  # Já incluído no pacote docker-compose-plugin
  ```
- Verificação: `docker compose version`

## PostgreSQL via Docker

### Instalação e Configuração
- Método recomendado: Usar imagem oficial do PostgreSQL no Docker
- Exemplo de docker-compose.yml básico:
  ```yaml
  version: '3.8'
  services:
    postgres:
      image: postgres:16
      container_name: postgres_db
      restart: always
      environment:
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: sua_senha
        POSTGRES_DB: seu_banco
      ports:
        - "5432:5432"
      volumes:
        - postgres_data:/var/lib/postgresql/data

  volumes:
    postgres_data:
  ```
- Iniciar o PostgreSQL: `docker compose up -d`
- Acessar o PostgreSQL: `docker exec -it postgres_db psql -U postgres`

### Ferramentas de Administração
- pgAdmin 4 (via Docker):
  ```yaml
  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: seu_email@exemplo.com
      PGADMIN_DEFAULT_PASSWORD: sua_senha
    ports:
      - "5050:80"
    depends_on:
      - postgres
  ```

## VS Code e Cursor AI

### VS Code
- Editor de código-fonte leve e poderoso da Microsoft
- Instalação via repositório oficial:
  ```bash
  # Adicionar chave GPG e repositório
  wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
  sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
  sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
  rm -f packages.microsoft.gpg

  # Instalar VS Code
  sudo apt update
  sudo apt install code
  ```

### Cursor AI
- Editor de código baseado no VS Code com recursos de IA integrados
- Instalação via AppImage:
  ```bash
  # Instalar dependências necessárias
  sudo apt install libfuse2

  # Baixar a versão mais recente
  wget https://download.cursor.sh/linux/appImage/x64/latest -O cursor.AppImage

  # Tornar o arquivo executável
  chmod +x cursor.AppImage

  # Executar o Cursor
  ./cursor.AppImage
  ```
- Alternativa: Criar um script de instalação:
  ```bash
  #!/bin/bash
  mkdir -p ~/.cursor
  cd ~/.cursor
  wget https://download.cursor.sh/linux/appImage/x64/latest -O cursor.AppImage
  chmod +x cursor.AppImage
  echo 'alias cursor="~/.cursor/cursor.AppImage"' >> ~/.bashrc
  source ~/.bashrc
  ```

## Claude API e Claude Code

### Claude API
- API da Anthropic para acessar os modelos Claude
- Instalação da biblioteca Python:
  ```bash
  pip install anthropic
  ```
- Configuração básica:
  ```python
  import anthropic
  import os

  # Configurar a chave API
  os.environ["ANTHROPIC_API_KEY"] = "sua_chave_api"
  client = anthropic.Anthropic()
  ```

### Claude Code
- Ferramenta de terminal para programação assistida por IA
- Pré-requisitos: Node.js e npm
- Instalação:
  ```bash
  # Instalar Claude Code globalmente
  npm install -g @anthropic/claude-code
  
  # Configurar a chave API
  claude-code auth
  ```
- Uso básico: `claude-code` no diretório do projeto

## DeepSeek SDK

### Instalação
- Pré-requisitos: Python 3.8+ e pip
- Instalação via pip:
  ```bash
  pip install deepseek
  ```
- Para versão de desenvolvimento:
  ```bash
  pip install git+https://github.com/deepseek-ai/deepseek-sdk.git
  ```

### Configuração
- Configurar a chave API:
  ```python
  import deepseek
  import os

  # Configurar a chave API
  os.environ["DEEPSEEK_API_KEY"] = "sua_chave_api"
  client = deepseek.Client()
  ```

## OpenAI CLI e ChatGPT

### OpenAI CLI
- Interface de linha de comando para a API da OpenAI
- Instalação via pip:
  ```bash
  pip install openai
  ```
- Configuração:
  ```bash
  # Exportar a chave API como variável de ambiente
  export OPENAI_API_KEY="sua_chave_api"
  ```

### ShellGPT (sgpt)
- Ferramenta de linha de comando para usar ChatGPT no terminal
- Instalação via pipx (recomendado):
  ```bash
  pipx install shell-gpt
  ```
- Configuração:
  ```bash
  # Configurar a chave API
  sgpt --api-key "sua_chave_api"
  ```
- Uso básico: `sgpt "Sua pergunta aqui"`
