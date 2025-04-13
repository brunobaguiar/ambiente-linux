# Guia de Organização de Pastas e Boas Práticas

Este guia fornece recomendações para organização de projetos, documentação e versionamento, ajudando você a manter seus projetos organizados, bem documentados e fáceis de manter.

## Estrutura de Pastas para Projetos

Uma boa estrutura de pastas é fundamental para manter seus projetos organizados e facilitar a colaboração. Aqui estão algumas estruturas recomendadas para diferentes tipos de projetos.

### Projeto Python Básico

```
meu-projeto/
├── .venv/                  # Ambiente virtual (geralmente ignorado no git)
├── src/                    # Código-fonte principal
│   └── meu_pacote/         # Pacote Python
│       ├── __init__.py     # Torna o diretório um pacote Python
│       ├── main.py         # Ponto de entrada principal
│       └── utils.py        # Funções utilitárias
├── tests/                  # Testes automatizados
│   ├── __init__.py
│   └── test_utils.py       # Testes para utils.py
├── docs/                   # Documentação
│   └── index.md            # Página inicial da documentação
├── .gitignore              # Arquivos a serem ignorados pelo Git
├── README.md               # Documentação principal
├── requirements.txt        # Dependências do projeto
└── setup.py                # Script de instalação
```

### Projeto de Data Science

```
projeto-data-science/
├── .venv/                  # Ambiente virtual
├── data/                   # Dados (geralmente ignorados no git)
│   ├── raw/                # Dados brutos
│   ├── processed/          # Dados processados
│   └── external/           # Dados de fontes externas
├── notebooks/              # Jupyter notebooks
│   ├── exploratory/        # Análise exploratória
│   └── final/              # Notebooks finais
├── src/                    # Código-fonte
│   ├── __init__.py
│   ├── data/               # Scripts para processamento de dados
│   ├── features/           # Scripts para engenharia de features
│   ├── models/             # Scripts para modelos
│   └── visualization/      # Scripts para visualização
├── models/                 # Modelos treinados salvos
├── reports/                # Relatórios gerados
│   └── figures/            # Figuras para relatórios
├── .gitignore
├── README.md
└── requirements.txt
```

### Projeto Web Frontend

```
projeto-frontend/
├── node_modules/           # Dependências (ignorado no git)
├── public/                 # Arquivos estáticos públicos
│   ├── index.html          # HTML principal
│   ├── favicon.ico         # Favicon
│   └── assets/             # Outros assets estáticos
├── src/                    # Código-fonte
│   ├── assets/             # Recursos (imagens, fontes, etc.)
│   ├── components/         # Componentes reutilizáveis
│   ├── pages/              # Páginas ou rotas
│   ├── styles/             # Arquivos CSS/SCSS
│   ├── utils/              # Funções utilitárias
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Ponto de entrada
├── tests/                  # Testes
├── .gitignore
├── package.json            # Dependências e scripts
├── README.md
└── vite.config.js          # Configuração do Vite (ou outro bundler)
```

### Projeto Full-Stack

```
projeto-fullstack/
├── backend/                # Código do servidor
│   ├── .venv/              # Ambiente virtual Python
│   ├── src/                # Código-fonte
│   ├── tests/              # Testes
│   ├── .gitignore
│   ├── README.md
│   └── requirements.txt
├── frontend/               # Código do cliente
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── README.md
├── docker/                 # Arquivos Docker
│   ├── docker-compose.yml
│   ├── backend.Dockerfile
│   └── frontend.Dockerfile
├── docs/                   # Documentação
├── .gitignore              # Gitignore principal
└── README.md               # Documentação principal
```

## Documentação com MkDocs

MkDocs é uma ferramenta simples e elegante para criar documentação a partir de arquivos Markdown.

### Instalação do MkDocs

```bash
# Instalar MkDocs
pip install mkdocs

# Instalar o tema Material para MkDocs (recomendado)
pip install mkdocs-material
```

### Criação de um Projeto de Documentação

```bash
# Criar um novo projeto de documentação
mkdocs new meu-projeto-docs
cd meu-projeto-docs
```

### Estrutura Básica do MkDocs

```
meu-projeto-docs/
├── docs/
│   └── index.md            # Página inicial
└── mkdocs.yml              # Arquivo de configuração
```

### Configuração do MkDocs

Edite o arquivo `mkdocs.yml`:

```yaml
site_name: Meu Projeto
site_description: Documentação do Meu Projeto
site_author: Seu Nome

theme:
  name: material
  palette:
    scheme: slate  # Tema escuro
    primary: indigo
    accent: indigo
  features:
    - navigation.tabs
    - navigation.sections
    - toc.integrate
    - search.suggest
    - search.highlight

markdown_extensions:
  - pymdownx.highlight
  - pymdownx.superfences
  - pymdownx.tabbed
  - pymdownx.tasklist
  - admonition
  - toc:
      permalink: true

nav:
  - Home: index.md
  - Guia de Instalação: instalacao.md
  - Tutoriais:
    - Primeiros Passos: tutoriais/primeiros-passos.md
    - Configuração Avançada: tutoriais/configuracao-avancada.md
  - API: api.md
  - Sobre: sobre.md
```

### Execução do Servidor de Desenvolvimento

```bash
# Iniciar o servidor de desenvolvimento
mkdocs serve
```

Acesse `http://localhost:8000` para visualizar a documentação.

### Construção da Documentação

```bash
# Construir a documentação estática
mkdocs build
```

Os arquivos HTML serão gerados no diretório `site/`.

## Versionamento com Git e GitHub

O Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código-fonte durante o desenvolvimento de software.

### Configuração Inicial do Git

```bash
# Configurar nome de usuário
git config --global user.name "Seu Nome"

# Configurar email
git config --global user.email "seu.email@exemplo.com"

# Configurar editor padrão (opcional)
git config --global core.editor "vim"
```

### Inicialização de um Repositório Git

```bash
# Inicializar um novo repositório Git
git init

# Adicionar um arquivo ao staging
git add README.md

# Fazer o primeiro commit
git commit -m "Commit inicial"
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

# Dependências Node.js
node_modules/
npm-debug.log
yarn-error.log

# Arquivos de build
/build/
/dist/
/.next/
/out/

# Arquivos de ambiente
.env
.env.local
.env.*.local

# Arquivos de IDE
.idea/
.vscode/
*.swp
*.swo

# Arquivos de sistema operacional
.DS_Store
Thumbs.db

# Arquivos de log
logs/
*.log

# Arquivos de dados (opcional, dependendo do projeto)
*.csv
*.json
*.xlsx
*.db
*.sqlite3
```

### Conexão com GitHub

```bash
# Adicionar um repositório remoto
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# Enviar commits para o repositório remoto
git push -u origin main
```

### Fluxo de Trabalho Básico com Git

```bash
# Verificar o status do repositório
git status

# Adicionar alterações ao staging
git add .

# Fazer um commit
git commit -m "Descrição das alterações"

# Enviar alterações para o repositório remoto
git push
```

### Branches e Merge

```bash
# Criar uma nova branch
git checkout -b feature/nova-funcionalidade

# Mudar para outra branch
git checkout main

# Mesclar uma branch na branch atual
git merge feature/nova-funcionalidade

# Excluir uma branch
git branch -d feature/nova-funcionalidade
```

### Pull Requests no GitHub

1. Faça fork do repositório original
2. Clone seu fork: `git clone https://github.com/seu-usuario/repositorio.git`
3. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
4. Faça suas alterações e commit: `git commit -m "Adiciona nova funcionalidade"`
5. Envie para seu fork: `git push origin feature/nova-funcionalidade`
6. No GitHub, crie um Pull Request da sua branch para o repositório original

## Ambientes Virtuais por Projeto

Ambientes virtuais isolam as dependências de cada projeto, evitando conflitos entre versões de pacotes.

### Python: venv

```bash
# Criar um ambiente virtual
python3 -m venv .venv

# Ativar o ambiente virtual
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows

# Instalar dependências
pip install -r requirements.txt

# Salvar dependências
pip freeze > requirements.txt

# Desativar o ambiente virtual
deactivate
```

### Node.js: nvm

```bash
# Instalar uma versão específica do Node.js
nvm install 20.18.0

# Usar uma versão específica
nvm use 20.18.0

# Criar um arquivo .nvmrc para o projeto
echo "20.18.0" > .nvmrc

# Usar a versão especificada no .nvmrc
nvm use
```

## Boas Práticas de Codificação

### Estilo de Código

- **Python**: Siga o [PEP 8](https://pep8.org/)
- **JavaScript**: Siga o [Airbnb Style Guide](https://github.com/airbnb/javascript)
- **HTML/CSS**: Siga o [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)

### Formatadores de Código

- **Python**: Black, isort
- **JavaScript/TypeScript**: Prettier, ESLint
- **HTML/CSS**: Prettier

```bash
# Instalar formatadores para Python
pip install black isort

# Formatar código Python
black .
isort .

# Instalar formatadores para JavaScript
npm install --save-dev prettier eslint

# Formatar código JavaScript
npx prettier --write .
npx eslint --fix .
```

### Documentação de Código

- **Python**: Docstrings (Google style, NumPy style ou reStructuredText)
- **JavaScript**: JSDoc

Exemplo de docstring em Python (Google style):

```python
def calcular_media(numeros):
    """Calcula a média aritmética de uma lista de números.
    
    Args:
        numeros (list): Uma lista de números.
        
    Returns:
        float: A média aritmética dos números.
        
    Raises:
        ValueError: Se a lista estiver vazia.
    """
    if not numeros:
        raise ValueError("A lista não pode estar vazia")
    return sum(numeros) / len(numeros)
```

Exemplo de JSDoc em JavaScript:

```javascript
/**
 * Calcula a média aritmética de uma lista de números.
 * 
 * @param {number[]} numeros - Uma lista de números.
 * @returns {number} A média aritmética dos números.
 * @throws {Error} Se a lista estiver vazia.
 */
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        throw new Error("A lista não pode estar vazia");
    }
    return numeros.reduce((a, b) => a + b, 0) / numeros.length;
}
```

## Testes Automatizados

### Python: pytest

```bash
# Instalar pytest
pip install pytest pytest-cov

# Executar testes
pytest

# Executar testes com cobertura
pytest --cov=src
```

### JavaScript: Jest

```bash
# Instalar Jest
npm install --save-dev jest

# Executar testes
npx jest

# Executar testes com cobertura
npx jest --coverage
```

## Integração Contínua (CI/CD)

### GitHub Actions

Crie um arquivo `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.10'
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pytest pytest-cov
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
    
    - name: Test with pytest
      run: |
        pytest --cov=src
```

## Conclusão

Seguir estas boas práticas de organização de pastas, documentação e versionamento ajudará você a manter seus projetos organizados, bem documentados e fáceis de manter. Lembre-se de que estas são recomendações gerais e podem ser adaptadas de acordo com as necessidades específicas do seu projeto.

Ao adotar estas práticas desde o início do projeto, você economizará tempo no longo prazo e facilitará a colaboração com outros desenvolvedores.
