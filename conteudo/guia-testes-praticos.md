# Guia de Testes Práticos das Ferramentas

Este guia fornece instruções para testar as ferramentas instaladas em seu ambiente de desenvolvimento, garantindo que tudo esteja funcionando corretamente.

## Teste do Python e Ferramentas Relacionadas

### Teste do Python

Crie um arquivo `teste_python.py`:

```python
# Teste básico do Python
import sys
import platform

print(f"Versão do Python: {sys.version}")
print(f"Plataforma: {platform.platform()}")

# Teste de sintaxe básica
def somar(a, b):
    return a + b

resultado = somar(5, 3)
print(f"5 + 3 = {resultado}")

# Teste de list comprehension
numeros = [1, 2, 3, 4, 5]
quadrados = [n**2 for n in numeros]
print(f"Quadrados de {numeros}: {quadrados}")
```

Execute o script:

```bash
python3 teste_python.py
```

Você deve ver a versão do Python, informações da plataforma e os resultados dos cálculos.

### Teste de Ambiente Virtual (venv)

```bash
# Criar um ambiente virtual de teste
python3 -m venv teste-venv

# Ativar o ambiente virtual
source teste-venv/bin/activate

# Verificar o ambiente
which python
python -V

# Instalar um pacote de teste
pip install requests

# Testar o pacote instalado
python -c "import requests; print(requests.__version__)"

# Desativar o ambiente virtual
deactivate

# Limpar (opcional)
rm -rf teste-venv
```

### Teste do Jupyter Lab

Crie um arquivo `teste_jupyter.ipynb` usando o Jupyter Lab:

1. Inicie o Jupyter Lab:
   ```bash
   jupyter lab
   ```

2. No navegador, crie um novo notebook Python 3.

3. Adicione e execute as seguintes células:

   ```python
   # Célula 1: Importar bibliotecas
   import numpy as np
   import matplotlib.pyplot as plt
   %matplotlib inline
   
   print("Jupyter Lab está funcionando!")
   ```

   ```python
   # Célula 2: Criar e visualizar dados
   x = np.linspace(0, 10, 100)
   y = np.sin(x)
   
   plt.figure(figsize=(10, 6))
   plt.plot(x, y, 'b-', linewidth=2)
   plt.title('Função Seno')
   plt.xlabel('x')
   plt.ylabel('sin(x)')
   plt.grid(True)
   plt.show()
   ```

4. Verifique se o gráfico é exibido corretamente.

## Teste do Node.js e Ferramentas Frontend

### Teste do Node.js e npm

```bash
# Verificar versões
node -v
npm -v

# Criar um projeto de teste
mkdir teste-node
cd teste-node
npm init -y

# Instalar um pacote de teste
npm install lodash

# Criar um arquivo de teste
cat > teste.js << 'EOL'
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
console.log('Array original:', array);
console.log('Array embaralhado:', _.shuffle(array));
console.log('Soma do array:', _.sum(array));
EOL

# Executar o script
node teste.js

# Limpar (opcional)
cd ..
rm -rf teste-node
```

### Teste do React com Vite

```bash
# Criar um projeto React com Vite
npm create vite@latest teste-react -- --template react

# Navegar para o diretório do projeto
cd teste-react

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

Abra o navegador no endereço indicado (geralmente http://localhost:5173) e verifique se a página do React é exibida corretamente.

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

```bash
# Limpar (opcional)
cd ..
rm -rf teste-react
```

## Teste do Docker e PostgreSQL

### Teste do Docker

```bash
# Verificar a instalação do Docker
docker --version
docker compose version

# Executar o contêiner "hello-world"
docker run hello-world
```

### Teste do PostgreSQL via Docker

```bash
# Criar um contêiner PostgreSQL de teste
docker run --name postgres-teste -e POSTGRES_PASSWORD=senha123 -p 5432:5432 -d postgres:16

# Verificar se o contêiner está em execução
docker ps

# Conectar ao PostgreSQL e executar comandos básicos
docker exec -it postgres-teste psql -U postgres -c "SELECT version();"
docker exec -it postgres-teste psql -U postgres -c "CREATE DATABASE teste_db;"
docker exec -it postgres-teste psql -U postgres -c "CREATE TABLE teste (id SERIAL PRIMARY KEY, nome VARCHAR(100));"
docker exec -it postgres-teste psql -U postgres -c "INSERT INTO teste (nome) VALUES ('Teste Docker');"
docker exec -it postgres-teste psql -U postgres -c "SELECT * FROM teste;"

# Parar e remover o contêiner (opcional)
docker stop postgres-teste
docker rm postgres-teste
```

### Teste do Docker Compose

Crie um arquivo `docker-compose-teste.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16
    container_name: postgres-compose-teste
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: senha123
      POSTGRES_DB: teste_compose
    ports:
      - "5432:5432"
```

Execute o Docker Compose:

```bash
# Iniciar os serviços
docker compose -f docker-compose-teste.yml up -d

# Verificar se o contêiner está em execução
docker ps

# Testar a conexão
docker exec -it postgres-compose-teste psql -U postgres -c "SELECT version();"

# Parar e remover os serviços (opcional)
docker compose -f docker-compose-teste.yml down
```

## Teste do VS Code e Cursor AI

### Teste do VS Code

1. Abra o VS Code:
   ```bash
   code
   ```

2. Verifique se a interface é carregada corretamente.

3. Teste a criação e edição de um arquivo:
   - Crie um novo arquivo (`Ctrl+N`)
   - Salve como `teste-vscode.py` (`Ctrl+S`)
   - Adicione o seguinte código:
     ```python
     def hello():
         print("Hello from VS Code!")
     
     hello()
     ```
   - Salve o arquivo
   - Execute o código usando o botão de execução (▶️) no canto superior direito

4. Teste a instalação de uma extensão:
   - Abra a visualização de extensões (`Ctrl+Shift+X`)
   - Pesquise por "Python"
   - Verifique se a extensão da Microsoft está instalada ou instale-a

### Teste do Cursor AI

1. Abra o Cursor AI:
   ```bash
   cursor
   ```

2. Verifique se a interface é carregada corretamente.

3. Teste os recursos de IA:
   - Crie um novo arquivo (`Ctrl+N`)
   - Salve como `teste-cursor.py` (`Ctrl+S`)
   - Digite um comentário solicitando código:
     ```python
     # Escreva uma função que calcule o fatorial de um número
     ```
   - Pressione `Ctrl+Enter` ou use o comando `/generate` para solicitar que a IA complete o código
   - Verifique se a IA gera uma função de fatorial

## Teste das Ferramentas de IA

### Teste da Claude API

Crie um arquivo `teste_claude.py`:

```python
import os
import anthropic

# Verificar se a chave API está configurada
api_key = os.environ.get("ANTHROPIC_API_KEY")
if not api_key:
    print("ERRO: Variável de ambiente ANTHROPIC_API_KEY não encontrada.")
    print("Configure a chave API com: export ANTHROPIC_API_KEY='sua_chave_api'")
    exit(1)

# Inicializar o cliente da Anthropic
client = anthropic.Anthropic(api_key=api_key)

# Enviar uma mensagem para o Claude
try:
    message = client.messages.create(
        model="claude-3-haiku-20240307",
        max_tokens=300,
        messages=[
            {"role": "user", "content": "Explique brevemente o que é o Ubuntu Linux."}
        ]
    )
    print("Resposta do Claude:")
    print(message.content[0].text)
    print("\nTeste da Claude API concluído com sucesso!")
except Exception as e:
    print(f"ERRO ao testar a Claude API: {e}")
```

Execute o script:

```bash
# Configurar a chave API (se ainda não estiver configurada)
export ANTHROPIC_API_KEY='sua_chave_api'

# Executar o teste
python3 teste_claude.py
```

### Teste do DeepSeek SDK

Crie um arquivo `teste_deepseek.py`:

```python
import os
from deepseek import Client

# Verificar se a chave API está configurada
api_key = os.environ.get("DEEPSEEK_API_KEY")
if not api_key:
    print("ERRO: Variável de ambiente DEEPSEEK_API_KEY não encontrada.")
    print("Configure a chave API com: export DEEPSEEK_API_KEY='sua_chave_api'")
    exit(1)

# Inicializar o cliente DeepSeek
try:
    client = Client(api_key=api_key)

    # Enviar uma solicitação ao modelo
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "user", "content": "Escreva um exemplo simples de função em Python para calcular o IMC (Índice de Massa Corporal)."}
        ]
    )

    print("Resposta do DeepSeek:")
    print(response.choices[0].message.content)
    print("\nTeste do DeepSeek SDK concluído com sucesso!")
except Exception as e:
    print(f"ERRO ao testar o DeepSeek SDK: {e}")
```

Execute o script:

```bash
# Configurar a chave API (se ainda não estiver configurada)
export DEEPSEEK_API_KEY='sua_chave_api'

# Executar o teste
python3 teste_deepseek.py
```

### Teste da OpenAI CLI

Crie um arquivo `teste_openai.py`:

```python
import os
from openai import OpenAI

# Verificar se a chave API está configurada
api_key = os.environ.get("OPENAI_API_KEY")
if not api_key:
    print("ERRO: Variável de ambiente OPENAI_API_KEY não encontrada.")
    print("Configure a chave API com: export OPENAI_API_KEY='sua_chave_api'")
    exit(1)

# Inicializar o cliente da OpenAI
try:
    client = OpenAI(api_key=api_key)

    # Enviar uma solicitação ao modelo
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": "Quais são as principais diferenças entre Python 2 e Python 3?"}
        ]
    )

    print("Resposta da OpenAI:")
    print(response.choices[0].message.content)
    print("\nTeste da OpenAI CLI concluído com sucesso!")
except Exception as e:
    print(f"ERRO ao testar a OpenAI CLI: {e}")
```

Execute o script:

```bash
# Configurar a chave API (se ainda não estiver configurada)
export OPENAI_API_KEY='sua_chave_api'

# Executar o teste
python3 teste_openai.py
```

## Teste do ShellGPT (sgpt)

```bash
# Verificar a instalação
sgpt --version

# Configurar a chave API (se ainda não estiver configurada)
sgpt --api-key 'sua_chave_api'

# Fazer uma pergunta simples
sgpt "Quais são os comandos básicos do Git?"
```

## Verificação Final do Ambiente

Crie um script `verificar_ambiente.sh` para verificar todas as ferramentas instaladas:

```bash
#!/bin/bash

echo "=== Verificação do Ambiente de Desenvolvimento ==="
echo

# Verificar Python e ferramentas relacionadas
echo "--- Python e Ferramentas Relacionadas ---"
python3 --version
pip3 --version
echo "venv: $(python3 -m venv --help > /dev/null && echo "Instalado" || echo "Não instalado")"
echo "Jupyter: $(jupyter --version > /dev/null 2>&1 && echo "Instalado" || echo "Não instalado")"
echo

# Verificar Node.js e npm
echo "--- Node.js e npm ---"
node --version
npm --version
echo

# Verificar Docker
echo "--- Docker ---"
docker --version
docker compose version
echo

# Verificar VS Code
echo "--- VS Code ---"
code --version
echo

# Verificar Cursor AI
echo "--- Cursor AI ---"
if [ -f ~/.cursor/cursor.AppImage ]; then
    echo "Cursor AI: Instalado"
else
    echo "Cursor AI: Não encontrado"
fi
echo

# Verificar ferramentas de IA
echo "--- Ferramentas de IA ---"
echo "Claude API: $(pip3 list | grep -q anthropic && echo "Biblioteca instalada" || echo "Biblioteca não instalada")"
echo "DeepSeek SDK: $(pip3 list | grep -q deepseek && echo "Biblioteca instalada" || echo "Biblioteca não instalada")"
echo "OpenAI CLI: $(pip3 list | grep -q openai && echo "Biblioteca instalada" || echo "Biblioteca não instalada")"
echo "ShellGPT: $(sgpt --version > /dev/null 2>&1 && echo "Instalado" || echo "Não instalado")"
echo

echo "=== Verificação concluída ==="
```

Execute o script:

```bash
chmod +x verificar_ambiente.sh
./verificar_ambiente.sh
```

## Conclusão

Se todos os testes forem bem-sucedidos, seu ambiente de desenvolvimento está configurado corretamente e pronto para uso. Caso encontre algum problema, consulte o guia de instalação correspondente para solucionar o problema.

Lembre-se de que para as ferramentas de IA (Claude API, DeepSeek SDK, OpenAI CLI), você precisa ter chaves API válidas configuradas como variáveis de ambiente para que os testes funcionem corretamente.
