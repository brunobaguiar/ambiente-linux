# Guia de Configuração Pós-instalação do Ubuntu 22.04 LTS

Este guia fornece instruções detalhadas para configurar o Ubuntu 22.04 LTS após a instalação, preparando o sistema para desenvolvimento com as ferramentas essenciais.

## Atualização do Sistema

A primeira etapa após a instalação é atualizar o sistema para garantir que você tenha as versões mais recentes de todos os pacotes:

```bash
# Atualizar a lista de pacotes disponíveis
sudo apt update

# Atualizar todos os pacotes instalados
sudo apt upgrade -y

# Atualizar o kernel e pacotes relacionados (se disponível)
sudo apt full-upgrade -y

# Remover pacotes desnecessários
sudo apt autoremove -y
```

## Configuração Regional e de Idioma

Se você não configurou o idioma durante a instalação ou deseja alterá-lo:

```bash
# Instalar pacotes de idioma adicionais
sudo apt install -y language-pack-pt language-pack-gnome-pt language-pack-pt-base language-pack-gnome-pt-base

# Configurar o suporte completo ao idioma
sudo dpkg-reconfigure locales
```

## Instalação de Ferramentas Básicas

Estas ferramentas são essenciais para desenvolvimento e serão utilizadas ao longo do tutorial:

```bash
# Instalar ferramentas de desenvolvimento básicas
sudo apt install -y build-essential

# Instalar git para controle de versão
sudo apt install -y git

# Instalar curl para download de arquivos
sudo apt install -y curl

# Instalar wget como alternativa ao curl
sudo apt install -y wget

# Instalar editor de texto avançado (vim)
sudo apt install -y vim

# Instalar utilitários de compressão
sudo apt install -y zip unzip

# Instalar ferramentas de rede
sudo apt install -y net-tools
```

## Configuração do Git

Configure o Git com suas informações pessoais:

```bash
# Configurar nome de usuário global
git config --global user.name "Seu Nome"

# Configurar email global
git config --global user.email "seu.email@exemplo.com"

# Configurar editor padrão (opcional)
git config --global core.editor "vim"

# Configurar para armazenar credenciais temporariamente (opcional)
git config --global credential.helper cache
```

## Configuração do Terminal

O terminal padrão do Ubuntu (GNOME Terminal) é bom, mas você pode melhorá-lo:

### Instalação do Terminator (terminal avançado)

```bash
sudo apt install -y terminator
```

### Instalação e Configuração do Zsh (opcional, mas recomendado)

O Zsh é um shell mais poderoso que o Bash padrão, com recursos avançados:

```bash
# Instalar Zsh
sudo apt install -y zsh

# Instalar Oh My Zsh (framework para gerenciar configurações do Zsh)
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Quando perguntado se deseja tornar o Zsh seu shell padrão, responda "Y".

## Configuração de Firewall

O Ubuntu vem com o UFW (Uncomplicated Firewall), que é fácil de configurar:

```bash
# Verificar status atual do firewall
sudo ufw status

# Habilitar o firewall
sudo ufw enable

# Permitir SSH (se necessário)
sudo ufw allow ssh

# Permitir portas específicas (exemplo para desenvolvimento web)
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 3000/tcp  # Desenvolvimento Node.js
sudo ufw allow 8000/tcp  # Desenvolvimento Python
```

## Configuração de Fontes para Desenvolvimento

Instalar fontes adequadas para programação melhora a experiência de desenvolvimento:

```bash
# Instalar fontes populares para programação
sudo apt install -y fonts-firacode fonts-jetbrains-mono

# Instalar ferramenta de visualização de fontes
sudo apt install -y font-manager
```

## Configuração de Atalhos de Teclado

Personalize os atalhos de teclado para aumentar sua produtividade:

1. Abra as Configurações do sistema
2. Vá para "Teclado" > "Atalhos de teclado"
3. Personalize os atalhos conforme sua preferência

Atalhos úteis para adicionar:
- Abrir terminal: Ctrl+Alt+T
- Captura de tela: Print Screen
- Captura de área: Shift+Print Screen

## Configuração de Área de Trabalho

### Instalação de GNOME Tweaks

O GNOME Tweaks permite personalizar a interface do Ubuntu:

```bash
sudo apt install -y gnome-tweaks
```

### Instalação de Extensões GNOME

As extensões GNOME adicionam funcionalidades à área de trabalho:

```bash
# Instalar suporte a extensões
sudo apt install -y gnome-shell-extensions chrome-gnome-shell

# Instalar ferramenta de gerenciamento de extensões
sudo apt install -y gnome-shell-extension-manager
```

## Otimização de Desempenho

### Ajuste de Swappiness

Reduzir o valor de swappiness pode melhorar o desempenho em sistemas com bastante RAM:

```bash
# Verificar valor atual
cat /proc/sys/vm/swappiness

# Definir valor temporariamente
sudo sysctl vm.swappiness=10

# Para tornar permanente, edite o arquivo sysctl.conf
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
```

### Configuração de I/O Scheduler

Para SSDs, o scheduler "deadline" ou "noop" pode oferecer melhor desempenho:

```bash
# Verificar scheduler atual
cat /sys/block/sda/queue/scheduler

# Definir scheduler temporariamente (para SSD)
echo 'deadline' | sudo tee /sys/block/sda/queue/scheduler
```

## Configuração de Backup

Configure backups regulares para proteger seu trabalho:

```bash
# Instalar Déjà Dup (ferramenta de backup)
sudo apt install -y deja-dup
```

Para configurar:
1. Abra o aplicativo "Backups" (Déjà Dup)
2. Selecione as pastas a serem incluídas (geralmente /home/seu-usuario)
3. Escolha o local de armazenamento do backup
4. Configure a programação de backups automáticos

## Configuração de Energia

Otimize as configurações de energia para melhor desempenho ou duração da bateria:

```bash
# Instalar TLP para gerenciamento avançado de energia
sudo apt install -y tlp tlp-rdw

# Iniciar o serviço TLP
sudo systemctl enable tlp
sudo systemctl start tlp
```

## Próximos Passos

Após configurar o ambiente básico do Ubuntu, você estará pronto para instalar e configurar as ferramentas de desenvolvimento específicas. Consulte o guia "Instalação e Configuração do Python e Ferramentas Relacionadas" para continuar.
