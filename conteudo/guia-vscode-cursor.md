# Guia de Instalação e Configuração do VS Code e Cursor AI

Este guia fornece instruções detalhadas para instalar e configurar o Visual Studio Code (VS Code) e o Cursor AI no Ubuntu 22.04 LTS, criando um ambiente ideal para desenvolvimento com assistência de IA.

## Instalação do Visual Studio Code

O Visual Studio Code é um editor de código-fonte leve, mas poderoso, que suporta uma ampla variedade de linguagens de programação e oferece um rico ecossistema de extensões.

### Instalação via Repositório Oficial

```bash
# Instalar dependências
sudo apt update
sudo apt install -y wget gpg apt-transport-https

# Baixar e instalar a chave GPG da Microsoft
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
rm -f packages.microsoft.gpg

# Adicionar o repositório do VS Code
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'

# Atualizar o índice de pacotes e instalar o VS Code
sudo apt update
sudo apt install -y code
```

### Instalação via Snap (Alternativa)

```bash
# Instalar o VS Code via Snap
sudo snap install code --classic
```

### Verificação da Instalação

```bash
# Verificar a versão do VS Code
code --version
```

## Configuração do VS Code

### Instalação de Extensões Essenciais

O VS Code pode ser personalizado com extensões para melhorar sua experiência de desenvolvimento. Você pode instalar extensões diretamente da interface gráfica ou via linha de comando:

```bash
# Instalar extensões via linha de comando
code --install-extension ms-python.python  # Suporte a Python
code --install-extension ms-python.vscode-pylance  # Servidor de linguagem Python
code --install-extension ms-toolsai.jupyter  # Suporte a Jupyter Notebooks
code --install-extension dbaeumer.vscode-eslint  # Linter para JavaScript/TypeScript
code --install-extension esbenp.prettier-vscode  # Formatador de código
code --install-extension ms-azuretools.vscode-docker  # Suporte a Docker
code --install-extension ms-vscode.cpptools  # Suporte a C/C++
code --install-extension golang.go  # Suporte a Go
code --install-extension redhat.java  # Suporte a Java
code --install-extension ms-dotnettools.csharp  # Suporte a C#
code --install-extension rust-lang.rust-analyzer  # Suporte a Rust
code --install-extension ms-vscode-remote.remote-ssh  # Desenvolvimento remoto via SSH
code --install-extension github.copilot  # GitHub Copilot (requer assinatura)
```

### Configuração de Temas

```bash
# Instalar temas populares
code --install-extension dracula-theme.theme-dracula  # Tema Dracula
code --install-extension zhuangtongfa.material-theme  # One Dark Pro
code --install-extension github.github-vscode-theme  # GitHub Theme
```

### Configuração de Fontes para Programação

```bash
# Instalar fontes para programação
sudo apt install -y fonts-firacode fonts-jetbrains-mono

# Instalar Cascadia Code (fonte da Microsoft)
wget -q https://github.com/microsoft/cascadia-code/releases/download/v2111.01/CascadiaCode-2111.01.zip
unzip -q CascadiaCode-2111.01.zip -d cascadia-code
sudo mkdir -p /usr/share/fonts/truetype/cascadia-code
sudo cp cascadia-code/ttf/*.ttf /usr/share/fonts/truetype/cascadia-code/
sudo fc-cache -f -v
rm -rf CascadiaCode-2111.01.zip cascadia-code
```

### Configurações Recomendadas

Crie ou edite o arquivo de configurações do VS Code:

1. Abra o VS Code
2. Pressione `Ctrl+Shift+P` para abrir a paleta de comandos
3. Digite "Preferences: Open Settings (JSON)" e selecione esta opção

Adicione as seguintes configurações:

```json
{
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Droid Sans Mono', 'monospace'",
  "editor.fontSize": 14,
  "editor.fontLigatures": true,
  "editor.formatOnSave": true,
  "editor.renderWhitespace": "boundary",
  "editor.rulers": [80, 120],
  "editor.minimap.enabled": true,
  "editor.suggestSelection": "first",
  "editor.wordWrap": "off",
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.linkedEditing": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.stickyScroll.enabled": true,
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "terminal.integrated.fontFamily": "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  "terminal.integrated.fontSize": 14,
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.editor.enablePreview": false,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "git.autofetch": true,
  "git.confirmSync": false,
  "telemetry.telemetryLevel": "off",
  "python.formatting.provider": "black",
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "[python]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "ms-python.python"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Instalação do Cursor AI

O Cursor AI é um editor de código baseado no VS Code que integra recursos avançados de IA para ajudar no desenvolvimento.

### Instalação via AppImage

```bash
# Instalar dependências necessárias
sudo apt update
sudo apt install -y libfuse2

# Criar diretório para o Cursor AI
mkdir -p ~/.cursor

# Baixar a versão mais recente do Cursor AI
wget https://download.cursor.sh/linux/appImage/x64/latest -O ~/.cursor/cursor.AppImage

# Tornar o arquivo executável
chmod +x ~/.cursor/cursor.AppImage

# Criar um alias para facilitar o uso
echo 'alias cursor="~/.cursor/cursor.AppImage"' >> ~/.bashrc
source ~/.bashrc
```

### Criação de um Atalho de Desktop

```bash
# Criar um arquivo .desktop para o Cursor AI
cat > ~/.local/share/applications/cursor.desktop << EOL
[Desktop Entry]
Name=Cursor AI
Comment=AI-first code editor
Exec=${HOME}/.cursor/cursor.AppImage
Icon=${HOME}/.cursor/cursor.png
Terminal=false
Type=Application
Categories=Development;IDE;
StartupWMClass=Cursor
EOL

# Baixar o ícone do Cursor AI
wget https://raw.githubusercontent.com/getcursor/cursor/main/resources/app/resources/icons/cursor.png -O ~/.cursor/cursor.png
```

### Verificação da Instalação

```bash
# Iniciar o Cursor AI
cursor
```

## Configuração do Cursor AI

### Configuração da API da Anthropic (Claude)

Para utilizar os recursos de IA do Cursor com o modelo Claude da Anthropic:

1. Obtenha uma chave API da Anthropic em [https://console.anthropic.com/](https://console.anthropic.com/)
2. Abra o Cursor AI
3. Vá para Configurações (engrenagem no canto inferior esquerdo)
4. Selecione "AI" no menu lateral
5. Em "API Keys", adicione sua chave API da Anthropic

### Configuração da API da OpenAI (Opcional)

Para utilizar os modelos da OpenAI:

1. Obtenha uma chave API da OpenAI em [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Abra o Cursor AI
3. Vá para Configurações
4. Selecione "AI" no menu lateral
5. Em "API Keys", adicione sua chave API da OpenAI

### Configurações Recomendadas

1. Abra o Cursor AI
2. Vá para Configurações
3. Ajuste as seguintes configurações:
   - Modelo de IA: Claude 3 Opus (recomendado para melhor desempenho)
   - Ativar "Auto-complete" para sugestões de código em tempo real
   - Ativar "Chat" para interagir com a IA durante o desenvolvimento
   - Ativar "Edits" para permitir que a IA faça edições no código

## Uso Básico do VS Code

### Atalhos de Teclado Essenciais

- `Ctrl+P`: Navegação rápida entre arquivos
- `Ctrl+Shift+P`: Paleta de comandos
- `Ctrl+/`: Comentar/descomentar linha ou seleção
- `Ctrl+Space`: Sugestões de código
- `F12`: Ir para definição
- `Alt+F12`: Peek definição
- `Ctrl+Shift+F`: Pesquisar em todos os arquivos
- `Ctrl+Shift+G`: Abrir controle de versão
- `Ctrl+Shift+E`: Abrir explorador de arquivos
- `Ctrl+Shift+X`: Abrir extensões
- `Ctrl+Shift+D`: Abrir depurador
- `Ctrl+`: Abrir/fechar terminal integrado
- `Ctrl+K Ctrl+S`: Abrir atalhos de teclado

### Recursos Avançados

- **Multi-cursor**: `Alt+Click` para adicionar cursores em múltiplas posições
- **Seleção de coluna**: `Shift+Alt` + arrastar para selecionar blocos de texto
- **Refatoração de código**: Clique com o botão direito > Refatorar
- **Terminal integrado**: Ctrl+` para abrir/fechar
- **Depuração integrada**: Configure com o arquivo `launch.json`
- **Live Share**: Colaboração em tempo real (requer extensão)

## Uso Básico do Cursor AI

### Comandos de IA

- `/edit`: Solicitar à IA para editar o código selecionado
- `/chat`: Iniciar uma conversa com a IA sobre o código
- `/generate`: Gerar código com base em uma descrição
- `/explain`: Solicitar à IA para explicar o código selecionado
- `/refactor`: Solicitar à IA para refatorar o código selecionado
- `/test`: Gerar testes para o código selecionado
- `/fix`: Solicitar à IA para corrigir problemas no código

### Fluxo de Trabalho Recomendado

1. **Planejamento com IA**:
   - Use o chat para discutir a arquitetura e abordagem
   - Peça à IA para sugerir estruturas de código

2. **Desenvolvimento Assistido**:
   - Use a geração de código para criar esqueletos de funções
   - Aproveite o autocompletar para escrever código mais rapidamente
   - Solicite edições para melhorar ou corrigir seu código

3. **Revisão e Refatoração**:
   - Peça à IA para explicar código complexo
   - Solicite refatorações para melhorar a qualidade do código
   - Gere testes para garantir a funcionalidade

## Integração com Outras Ferramentas

### Git e GitHub

Tanto o VS Code quanto o Cursor AI oferecem excelente integração com Git:

1. **Inicializar um repositório**:
   - Abra a paleta de comandos (`Ctrl+Shift+P`)
   - Digite "Git: Initialize Repository"

2. **Operações básicas de Git**:
   - Acesse o painel de controle de versão (`Ctrl+Shift+G`)
   - Stage, commit, push e pull diretamente da interface

3. **GitHub Copilot** (requer assinatura):
   - Instale a extensão GitHub Copilot
   - Ative com sua conta GitHub
   - Receba sugestões de código em tempo real

### Docker

Com a extensão Docker instalada:

1. Acesse o painel Docker (`Ctrl+Shift+P` > "Docker: Open Docker View")
2. Gerencie imagens, contêineres, volumes e redes
3. Execute e depure aplicações em contêineres

### Bancos de Dados

Para trabalhar com PostgreSQL e outros bancos de dados:

1. Instale a extensão "SQLTools" e o driver correspondente
2. Configure a conexão com seu banco de dados
3. Execute consultas e visualize resultados diretamente no editor

## Solução de Problemas Comuns

### VS Code não Inicia

```bash
# Reiniciar o VS Code com logs de depuração
code --verbose

# Redefinir configurações do usuário
mv ~/.config/Code ~/.config/Code.bak
```

### Problemas com Extensões

```bash
# Iniciar o VS Code sem extensões
code --disable-extensions

# Desinstalar uma extensão problemática
code --uninstall-extension id-da-extensao
```

### Cursor AI não Inicia

```bash
# Verificar dependências
sudo apt install -y libfuse2

# Executar com logs de depuração
~/.cursor/cursor.AppImage --verbose
```

### Problemas com a API da IA

1. Verifique se sua chave API está correta e não expirou
2. Verifique sua conexão com a internet
3. Verifique se você tem créditos suficientes na sua conta

## Próximos Passos

Após configurar o VS Code e o Cursor AI, você estará pronto para instalar e configurar as ferramentas de IA como Claude API, DeepSeek SDK e OpenAI CLI. Consulte o guia "Instalação e Configuração de Ferramentas de IA" para continuar.
