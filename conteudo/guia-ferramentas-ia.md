# Guia de Instalação e Configuração de Ferramentas de IA

Este guia fornece instruções detalhadas para instalar e configurar ferramentas de IA como Claude API, Claude Code, DeepSeek SDK e OpenAI CLI no Ubuntu 22.04 LTS, criando um ambiente ideal para desenvolvimento com assistência de IA.

## Instalação e Configuração da Claude API

A Claude API permite acessar os modelos de linguagem da Anthropic, como o Claude 3 Opus, Claude 3 Sonnet e Claude 3 Haiku, diretamente de suas aplicações.

### Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Uma conta na Anthropic e uma chave API

### Obtenção da Chave API da Anthropic

1. Crie uma conta em [https://console.anthropic.com/](https://console.anthropic.com/)
2. Após o login, vá para "API Keys" no menu lateral
3. Clique em "Create Key" para gerar uma nova chave API
4. Copie e armazene sua chave API em um local seguro

### Instalação da Biblioteca Python da Anthropic

```bash
# Ativar seu ambiente virtual (recomendado)
source ~/seu-ambiente/bin/activate

# Instalar a biblioteca da Anthropic
pip install anthropic
```

### Configuração da Chave API

```bash
# Configurar a chave API como variável de ambiente
echo 'export ANTHROPIC_API_KEY="sua_chave_api"' >> ~/.bashrc
source ~/.bashrc
```

### Exemplo de Uso Básico

Crie um arquivo `teste_claude.py`:

```python
import anthropic
import os

# Inicializar o cliente da Anthropic
client = anthropic.Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)

# Enviar uma mensagem para o Claude
message = client.messages.create(
    model="claude-3-opus-20240229",
    max_tokens=1000,
    messages=[
        {"role": "user", "content": "Explique como a inteligência artificial pode ajudar no desenvolvimento de software."}
    ]
)

# Imprimir a resposta
print(message.content)
```

Execute o script:

```bash
python teste_claude.py
```

## Instalação e Configuração do Claude Code

O Claude Code é uma ferramenta de linha de comando que permite interagir com o Claude diretamente do seu terminal, especialmente para tarefas de programação.

### Pré-requisitos

- Node.js 18 ou superior
- npm (gerenciador de pacotes Node.js)
- Uma chave API da Anthropic

### Instalação do Claude Code

```bash
# Instalar o Claude Code globalmente
npm install -g @anthropic/claude-code

# Verificar a instalação
claude-code --version
```

### Configuração da Chave API

```bash
# Configurar a chave API
claude-code auth
```

Quando solicitado, insira sua chave API da Anthropic.

### Uso Básico do Claude Code

```bash
# Navegar para o diretório do seu projeto
cd ~/seu-projeto

# Iniciar o Claude Code
claude-code

# Dentro do Claude Code, você pode fazer perguntas como:
# "Explique o que este código faz"
# "Como posso otimizar esta função?"
# "Escreva um teste para esta classe"
```

### Comandos Úteis do Claude Code

- `claude-code help`: Exibir ajuda e comandos disponíveis
- `claude-code auth`: Configurar ou atualizar a chave API
- `claude-code reset`: Redefinir a sessão atual
- `claude-code version`: Verificar a versão instalada

## Instalação e Configuração do DeepSeek SDK

O DeepSeek SDK permite acessar os modelos de linguagem da DeepSeek, como o DeepSeek-R1, diretamente de suas aplicações.

### Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Uma conta na DeepSeek e uma chave API

### Obtenção da Chave API da DeepSeek

1. Crie uma conta em [https://platform.deepseek.ai/](https://platform.deepseek.ai/)
2. Após o login, vá para "API Keys" no menu de configurações
3. Gere uma nova chave API
4. Copie e armazene sua chave API em um local seguro

### Instalação do DeepSeek SDK

```bash
# Ativar seu ambiente virtual (recomendado)
source ~/seu-ambiente/bin/activate

# Instalar o DeepSeek SDK
pip install deepseek
```

### Configuração da Chave API

```bash
# Configurar a chave API como variável de ambiente
echo 'export DEEPSEEK_API_KEY="sua_chave_api"' >> ~/.bashrc
source ~/.bashrc
```

### Exemplo de Uso Básico

Crie um arquivo `teste_deepseek.py`:

```python
import os
from deepseek import Client

# Inicializar o cliente DeepSeek
client = Client(api_key=os.environ.get("DEEPSEEK_API_KEY"))

# Enviar uma solicitação ao modelo
response = client.chat.completions.create(
    model="deepseek-r1-chat",
    messages=[
        {"role": "user", "content": "Escreva um algoritmo de ordenação em Python e explique como ele funciona."}
    ]
)

# Imprimir a resposta
print(response.choices[0].message.content)
```

Execute o script:

```bash
python teste_deepseek.py
```

## Instalação e Configuração do DeepSeek-R1 Localmente (Opcional)

Se você tiver um hardware adequado (GPU com pelo menos 16GB de VRAM), pode executar o modelo DeepSeek-R1 localmente.

### Pré-requisitos

- CUDA 11.8 ou superior
- Python 3.8 ou superior
- Pelo menos 16GB de VRAM (para o modelo de 7B parâmetros)
- Pelo menos 32GB de RAM

### Instalação

```bash
# Instalar dependências
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
pip install transformers accelerate bitsandbytes

# Criar um script para executar o modelo localmente
cat > run_deepseek_local.py << 'EOL'
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

# Carregar o modelo e o tokenizador
model_id = "deepseek-ai/deepseek-r1-7b-chat"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
    trust_remote_code=True
)

# Criar um pipeline de geração de texto
pipe = pipeline(
    "text-generation",
    model=model,
    tokenizer=tokenizer,
    max_new_tokens=512,
    do_sample=True,
    temperature=0.7,
    top_p=0.9,
)

# Função para interagir com o modelo
def chat_with_model(prompt):
    messages = [{"role": "user", "content": prompt}]
    formatted_prompt = tokenizer.apply_chat_template(messages, tokenize=False)
    outputs = pipe(formatted_prompt)
    return outputs[0]["generated_text"].split("assistant: ")[1]

# Interface de linha de comando simples
if __name__ == "__main__":
    print("DeepSeek-R1 Chat (Digite 'sair' para encerrar)")
    while True:
        user_input = input("\nVocê: ")
        if user_input.lower() == "sair":
            break
        response = chat_with_model(user_input)
        print(f"\nDeepSeek: {response}")
EOL

# Executar o script
python run_deepseek_local.py
```

## Instalação e Configuração da OpenAI CLI

A OpenAI CLI permite acessar os modelos de linguagem da OpenAI, como o GPT-4 e o GPT-3.5, diretamente do seu terminal.

### Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Uma conta na OpenAI e uma chave API

### Obtenção da Chave API da OpenAI

1. Crie uma conta em [https://platform.openai.com/](https://platform.openai.com/)
2. Após o login, vá para "API Keys" no menu de configurações
3. Clique em "Create new secret key" para gerar uma nova chave API
4. Copie e armazene sua chave API em um local seguro

### Instalação da Biblioteca Python da OpenAI

```bash
# Ativar seu ambiente virtual (recomendado)
source ~/seu-ambiente/bin/activate

# Instalar a biblioteca da OpenAI
pip install openai
```

### Configuração da Chave API

```bash
# Configurar a chave API como variável de ambiente
echo 'export OPENAI_API_KEY="sua_chave_api"' >> ~/.bashrc
source ~/.bashrc
```

### Exemplo de Uso Básico

Crie um arquivo `teste_openai.py`:

```python
import os
from openai import OpenAI

# Inicializar o cliente da OpenAI
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Enviar uma solicitação ao modelo
response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Quais são as melhores práticas para desenvolvimento seguro em Python?"}
    ]
)

# Imprimir a resposta
print(response.choices[0].message.content)
```

Execute o script:

```bash
python teste_openai.py
```

## Instalação e Configuração do ShellGPT (sgpt)

O ShellGPT é uma ferramenta de linha de comando que permite interagir com os modelos da OpenAI diretamente do seu terminal.

### Instalação do ShellGPT

```bash
# Instalar o ShellGPT usando pipx (recomendado)
pipx install shell-gpt

# Verificar a instalação
sgpt --version
```

### Configuração da Chave API

```bash
# Configurar a chave API
sgpt --api-key "sua_chave_api"
```

### Uso Básico do ShellGPT

```bash
# Fazer uma pergunta simples
sgpt "Como posso otimizar consultas SQL no PostgreSQL?"

# Gerar um comando shell
sgpt --shell "Crie um backup de todos os arquivos .py no diretório atual"

# Explicar um código
cat arquivo.py | sgpt --code "Explique o que este código faz"

# Traduzir texto
sgpt --translate "pt" "Hello, how are you?"
```

### Configuração Avançada do ShellGPT

Crie ou edite o arquivo de configuração:

```bash
mkdir -p ~/.config/shell-gpt
cat > ~/.config/shell-gpt/config.yaml << EOL
model: gpt-4
temperature: 0.7
top_p: 1.0
max_tokens: 1000
chat_context: true
chat_path: ~/.config/shell-gpt/chats
EOL
```

## Organização de Projetos com Ferramentas de IA

### Estrutura de Diretórios Recomendada

```
projeto-ia/
├── .env                    # Variáveis de ambiente (chaves API)
├── .gitignore              # Arquivos a serem ignorados pelo Git
├── README.md               # Documentação do projeto
├── requirements.txt        # Dependências Python
├── src/                    # Código-fonte
│   ├── __init__.py
│   ├── anthropic_client.py # Código para interagir com a Claude API
│   ├── deepseek_client.py  # Código para interagir com a DeepSeek API
│   ├── openai_client.py    # Código para interagir com a OpenAI API
│   └── utils.py            # Funções utilitárias
├── notebooks/              # Jupyter notebooks para experimentos
│   └── comparacao_modelos.ipynb
├── scripts/                # Scripts utilitários
│   ├── setup_env.sh        # Script para configurar o ambiente
│   └── test_apis.sh        # Script para testar as APIs
└── tests/                  # Testes automatizados
    ├── __init__.py
    ├── test_anthropic.py
    ├── test_deepseek.py
    └── test_openai.py
```

### Arquivo .env para Gerenciamento de Chaves API

Crie um arquivo `.env` na raiz do seu projeto:

```
ANTHROPIC_API_KEY=sua_chave_api_anthropic
DEEPSEEK_API_KEY=sua_chave_api_deepseek
OPENAI_API_KEY=sua_chave_api_openai
```

Instale e use a biblioteca `python-dotenv` para carregar as variáveis de ambiente:

```bash
pip install python-dotenv
```

Exemplo de uso:

```python
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Acessar as chaves API
anthropic_api_key = os.getenv("ANTHROPIC_API_KEY")
deepseek_api_key = os.getenv("DEEPSEEK_API_KEY")
openai_api_key = os.getenv("OPENAI_API_KEY")
```

### Arquivo .gitignore para Segurança

Crie um arquivo `.gitignore` na raiz do seu projeto:

```
# Arquivos de ambiente
.env
.env.local
.env.*.local

# Chaves API e segredos
*.pem
*.key
*.cert

# Diretórios Python
__pycache__/
*.py[cod]
*$py.class
.pytest_cache/
.coverage
htmlcov/
.tox/
.nox/
.hypothesis/
.pytest_cache/
.coverage
.coverage.*
.cache/
nosetests.xml
coverage.xml
*.cover

# Ambientes virtuais
venv/
ENV/
env/
.venv/

# Jupyter Notebook
.ipynb_checkpoints

# Logs
logs/
*.log
```

## Boas Práticas de Segurança para APIs de IA

1. **Nunca compartilhe suas chaves API**
   - Não inclua chaves API em repositórios públicos
   - Use variáveis de ambiente ou arquivos `.env` (excluídos do controle de versão)

2. **Defina limites de uso**
   - Configure limites de gastos nas plataformas de IA
   - Monitore o uso para evitar cobranças inesperadas

3. **Implemente rate limiting**
   - Limite o número de solicitações à API
   - Implemente backoff exponencial para lidar com erros de taxa

4. **Valide entradas e saídas**
   - Sanitize as entradas enviadas aos modelos de IA
   - Valide e sanitize as respostas antes de usá-las

5. **Mantenha as bibliotecas atualizadas**
   - Atualize regularmente as bibliotecas de IA
   - Fique atento a vulnerabilidades de segurança

## Comparação de Modelos de IA

| Modelo | Empresa | Pontos Fortes | Casos de Uso Ideais |
|--------|---------|---------------|---------------------|
| Claude 3 Opus | Anthropic | Raciocínio complexo, seguimento de instruções, segurança | Análise de código, raciocínio matemático, tarefas que exigem precisão |
| Claude 3 Sonnet | Anthropic | Bom equilíbrio entre desempenho e custo | Uso geral, assistência à programação, geração de conteúdo |
| Claude 3 Haiku | Anthropic | Rápido e econômico | Tarefas simples, respostas rápidas, aplicações em tempo real |
| DeepSeek-R1 | DeepSeek | Especializado em código, conhecimento técnico | Desenvolvimento de software, explicação de código, debugging |
| GPT-4 | OpenAI | Amplo conhecimento, multimodal | Tarefas complexas, geração criativa, análise de imagens |
| GPT-3.5 Turbo | OpenAI | Rápido e econômico | Chatbots, tarefas simples, prototipagem |

## Solução de Problemas Comuns

### Erro de Autenticação

Se você encontrar erros de autenticação:

1. Verifique se a chave API está correta
2. Verifique se a chave API não expirou
3. Verifique se a variável de ambiente está definida corretamente:
   ```bash
   echo $ANTHROPIC_API_KEY
   echo $DEEPSEEK_API_KEY
   echo $OPENAI_API_KEY
   ```

### Erro de Cota Excedida

Se você encontrar erros de cota excedida:

1. Verifique seu uso atual na plataforma correspondente
2. Aumente seu limite de cota (se possível)
3. Implemente rate limiting em seu código

### Problemas de Instalação

Se você encontrar problemas ao instalar as bibliotecas:

```bash
# Atualizar pip
pip install --upgrade pip

# Instalar com verbose para ver erros detalhados
pip install -v anthropic
pip install -v deepseek
pip install -v openai
```

## Recursos Adicionais

### Documentação Oficial

- [Documentação da Anthropic](https://docs.anthropic.com/)
- [Documentação da DeepSeek](https://platform.deepseek.ai/docs)
- [Documentação da OpenAI](https://platform.openai.com/docs)

### Tutoriais e Exemplos

- [Exemplos da Claude API](https://github.com/anthropics/anthropic-cookbook)
- [Exemplos da OpenAI API](https://github.com/openai/openai-cookbook)

### Comunidades

- [Fórum da Anthropic](https://forum.anthropic.com/)
- [Comunidade da OpenAI](https://community.openai.com/)

## Próximos Passos

Após configurar todas as ferramentas de desenvolvimento e IA, você terá um ambiente completo e versátil para trabalhar em projetos de programação, data science, machine learning e automações. Consulte o guia "Organização de Pastas e Boas Práticas" para aprender como estruturar seus projetos de forma eficiente.
