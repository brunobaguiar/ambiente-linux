# Guia de Instalação e Configuração do Python e Ferramentas Relacionadas

Este guia fornece instruções detalhadas para instalar e configurar o Python e suas ferramentas relacionadas (venv, pip, pipx e Jupyter Lab) no Ubuntu 22.04 LTS, criando um ambiente ideal para desenvolvimento, data science e machine learning.

## Instalação do Python

O Ubuntu 22.04 LTS já vem com Python 3.10.6 pré-instalado. No entanto, vamos garantir que você tenha a versão mais atualizada e todas as ferramentas necessárias para desenvolvimento.

### Atualização e Instalação de Pacotes Essenciais

```bash
# Atualizar o sistema
sudo apt update && sudo apt upgrade -y

# Instalar pacotes essenciais para desenvolvimento Python
sudo apt install -y python3 python3-pip python3-venv python3-dev build-essential
```

### Verificação da Instalação

```bash
# Verificar a versão do Python
python3 --version

# Verificar a versão do pip
pip3 --version
```

## Configuração de Ambientes Virtuais (venv)

Os ambientes virtuais permitem isolar dependências de projetos Python, evitando conflitos entre pacotes.

### Criação de um Ambiente Virtual

```bash
# Criar um diretório para seus projetos (se ainda não existir)
mkdir -p ~/projetos

# Criar um ambiente virtual para um projeto específico
cd ~/projetos
python3 -m venv meu-ambiente
```

### Ativação e Desativação do Ambiente Virtual

```bash
# Ativar o ambiente virtual
source ~/projetos/meu-ambiente/bin/activate

# Seu prompt mudará para indicar que o ambiente está ativo
# (meu-ambiente) usuario@computador:~$

# Para desativar o ambiente virtual quando terminar
deactivate
```

### Instalação de Pacotes no Ambiente Virtual

```bash
# Com o ambiente ativado, instale pacotes usando pip
# (meu-ambiente) usuario@computador:~$ pip install nome-do-pacote

# Exemplo: instalar numpy e pandas
pip install numpy pandas

# Para salvar a lista de pacotes instalados
pip freeze > requirements.txt

# Para instalar pacotes a partir de um arquivo requirements.txt
pip install -r requirements.txt
```

## Instalação e Configuração do Pip

O pip é o gerenciador de pacotes padrão do Python. Vamos garantir que você tenha a versão mais recente e configurá-lo corretamente.

### Atualização do Pip

```bash
# Atualizar o pip para a versão mais recente
python3 -m pip install --upgrade pip
```

### Configuração do Pip para Instalação de Usuário

Para instalar pacotes sem privilégios de administrador:

```bash
# Criar diretório para configuração do pip (se não existir)
mkdir -p ~/.config/pip

# Criar arquivo de configuração
echo "[global]
user = true" > ~/.config/pip/pip.conf
```

### Instalação de Pacotes Comuns para Data Science

```bash
# Ativar seu ambiente virtual
source ~/projetos/meu-ambiente/bin/activate

# Instalar pacotes essenciais para data science
pip install numpy pandas matplotlib seaborn scikit-learn scipy
```

## Instalação e Uso do Pipx

O pipx permite instalar e executar aplicativos Python em ambientes isolados, combinando a facilidade do pip com o isolamento dos ambientes virtuais.

### Instalação do Pipx

```bash
# Instalar pipx
python3 -m pip install --user pipx
python3 -m pipx ensurepath

# Recarregar o shell para aplicar as mudanças no PATH
source ~/.bashrc
```

### Uso Básico do Pipx

```bash
# Instalar um aplicativo com pipx
pipx install nome-do-aplicativo

# Exemplo: instalar black (formatador de código Python)
pipx install black

# Listar aplicativos instalados
pipx list

# Atualizar um aplicativo
pipx upgrade nome-do-aplicativo

# Desinstalar um aplicativo
pipx uninstall nome-do-aplicativo
```

### Instalação de Ferramentas Úteis com Pipx

```bash
# Instalar ferramentas de desenvolvimento populares
pipx install black  # Formatador de código
pipx install flake8  # Linter
pipx install mypy  # Verificador de tipos
pipx install poetry  # Gerenciamento de dependências
pipx install pytest  # Framework de testes
```

## Instalação e Configuração do Jupyter Lab

O Jupyter Lab é um ambiente interativo de desenvolvimento para data science, machine learning e computação científica.

### Instalação do Jupyter Lab

Recomendamos instalar o Jupyter Lab em um ambiente virtual dedicado:

```bash
# Criar um ambiente virtual para o Jupyter
python3 -m venv ~/jupyter-env

# Ativar o ambiente
source ~/jupyter-env/bin/activate

# Instalar Jupyter Lab
pip install jupyterlab
```

Alternativamente, você pode instalar o Jupyter Lab com pipx para uso global:

```bash
pipx install jupyterlab
```

### Configuração do Jupyter Lab

```bash
# Gerar um arquivo de configuração
jupyter lab --generate-config

# Definir uma senha para acesso (recomendado)
jupyter lab password
```

### Instalação de Extensões para IA

```bash
# Ativar o ambiente do Jupyter (se estiver usando venv)
source ~/jupyter-env/bin/activate

# Instalar extensão para suporte a Language Server Protocol
pip install jupyterlab-lsp python-lsp-server

# Instalar extensão para chat com IA
pip install jupyterlab-ai-chat

# Instalar extensão para tradução de código
pip install jupyterlab-code-translator
```

### Iniciar o Jupyter Lab

```bash
# Se instalado em um ambiente virtual
source ~/jupyter-env/bin/activate
jupyter lab

# Se instalado com pipx
jupyterlab
```

Por padrão, o Jupyter Lab será iniciado em http://localhost:8888 no seu navegador.

### Configuração para Acesso Remoto (Opcional)

Se você precisar acessar o Jupyter Lab de outro computador:

```bash
# Configurar para aceitar conexões de qualquer IP
jupyter lab --ip=0.0.0.0
```

## Integração com VS Code

O VS Code oferece excelente suporte para Python e Jupyter Notebooks.

### Instalação de Extensões no VS Code

1. Abra o VS Code
2. Vá para a seção de extensões (Ctrl+Shift+X)
3. Instale as seguintes extensões:
   - Python (da Microsoft)
   - Jupyter
   - Pylance

### Configuração do VS Code para Python

1. Abra as configurações (Ctrl+,)
2. Pesquise por "python.defaultInterpreterPath"
3. Defina o caminho para o interpretador Python do seu ambiente virtual:
   ```
   ~/projetos/meu-ambiente/bin/python3
   ```

## Boas Práticas para Projetos Python

### Estrutura de Diretórios Recomendada

```
meu-projeto/
├── .venv/                  # Ambiente virtual (geralmente ignorado no git)
├── src/                    # Código-fonte principal
│   └── meu_pacote/         # Pacote Python
│       ├── __init__.py
│       └── modulo.py
├── tests/                  # Testes automatizados
│   └── test_modulo.py
├── notebooks/              # Jupyter notebooks
│   └── analise.ipynb
├── data/                   # Dados (geralmente ignorados no git)
│   ├── raw/                # Dados brutos
│   └── processed/          # Dados processados
├── docs/                   # Documentação
├── requirements.txt        # Dependências do projeto
├── setup.py                # Script de instalação
└── README.md               # Documentação principal
```

### Arquivo .gitignore Recomendado

Crie um arquivo `.gitignore` na raiz do seu projeto:

```
# Ambientes virtuais
.venv/
venv/
ENV/

# Arquivos de cache Python
__pycache__/
*.py[cod]
*$py.class
.pytest_cache/

# Distribuição / empacotamento
dist/
build/
*.egg-info/

# Jupyter Notebook
.ipynb_checkpoints

# Dados (opcional, dependendo do projeto)
data/

# Arquivos de ambiente
.env
.env.local

# Logs
logs/
*.log
```

## Solução de Problemas Comuns

### Erro "externally-managed-environment"

No Ubuntu 22.04 e versões mais recentes, o Python é gerenciado pelo sistema de pacotes APT. Se você encontrar este erro ao usar pip:

```
error: externally-managed-environment
```

Soluções:
1. Use ambientes virtuais (recomendado):
   ```bash
   python3 -m venv meu-ambiente
   source meu-ambiente/bin/activate
   pip install pacote
   ```

2. Use a flag `--break-system-packages` (não recomendado para uso regular):
   ```bash
   pip install --break-system-packages pacote
   ```

3. Use a instalação para o usuário:
   ```bash
   pip install --user pacote
   ```

### Conflitos de Versão do Python

Se você precisar de várias versões do Python:

```bash
# Instalar versões adicionais
sudo apt install python3.9 python3.9-venv python3.9-dev

# Criar ambiente virtual com versão específica
python3.9 -m venv meu-ambiente-py39
```

## Próximos Passos

Após configurar o Python e suas ferramentas relacionadas, você estará pronto para instalar e configurar o Node.js e as ferramentas frontend. Consulte o guia "Instalação e Configuração do Node.js e Ferramentas Frontend" para continuar.
