# Guia de Instalação e Configuração do Docker e PostgreSQL

Este guia fornece instruções detalhadas para instalar e configurar o Docker, Docker Compose e PostgreSQL no Ubuntu 22.04 LTS, criando um ambiente ideal para desenvolvimento com bancos de dados.

## Instalação do Docker

O Docker permite criar, implantar e executar aplicações em contêineres, facilitando o gerenciamento de dependências e a portabilidade entre ambientes.

### Instalação do Docker Engine

```bash
# Remover versões antigas (se existirem)
sudo apt remove docker docker-engine docker.io containerd runc

# Atualizar o índice de pacotes
sudo apt update

# Instalar pacotes necessários
sudo apt install -y ca-certificates curl gnupg lsb-release

# Adicionar a chave GPG oficial do Docker
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Configurar o repositório
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Atualizar o índice de pacotes
sudo apt update

# Instalar o Docker Engine, containerd e Docker Compose
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Verificação da Instalação do Docker

```bash
# Verificar se o Docker foi instalado corretamente
sudo docker run hello-world
```

### Configuração de Permissões (Executar Docker sem sudo)

```bash
# Adicionar seu usuário ao grupo docker
sudo usermod -aG docker $USER

# Aplicar as alterações de grupo (requer logout e login)
# Alternativamente, você pode usar o comando abaixo para aplicar as alterações sem logout
newgrp docker

# Verificar se você pode executar o Docker sem sudo
docker run hello-world
```

## Instalação e Configuração do Docker Compose

O Docker Compose é uma ferramenta para definir e executar aplicações Docker multi-contêiner.

### Verificação da Instalação do Docker Compose

O Docker Compose já foi instalado como um plugin do Docker no passo anterior. Vamos verificar a instalação:

```bash
# Verificar a versão do Docker Compose
docker compose version
```

### Criação de um Diretório para Projetos Docker

```bash
# Criar um diretório para seus projetos Docker
mkdir -p ~/docker-projects
cd ~/docker-projects
```

## Instalação e Configuração do PostgreSQL via Docker

O PostgreSQL é um sistema de gerenciamento de banco de dados relacional poderoso e de código aberto.

### Criação de um Contêiner PostgreSQL Básico

```bash
# Criar e executar um contêiner PostgreSQL
docker run --name postgres-db -e POSTGRES_PASSWORD=sua_senha -p 5432:5432 -d postgres:16
```

### Verificação do Contêiner PostgreSQL

```bash
# Verificar se o contêiner está em execução
docker ps

# Verificar os logs do contêiner
docker logs postgres-db
```

### Conexão ao PostgreSQL

```bash
# Conectar ao PostgreSQL usando o cliente psql dentro do contêiner
docker exec -it postgres-db psql -U postgres
```

Dentro do cliente psql, você pode executar comandos SQL:

```sql
-- Criar um novo banco de dados
CREATE DATABASE meu_banco;

-- Listar todos os bancos de dados
\l

-- Conectar a um banco de dados específico
\c meu_banco

-- Sair do cliente psql
\q
```

## Configuração do PostgreSQL com Docker Compose

O Docker Compose facilita a configuração e o gerenciamento de serviços multi-contêiner.

### Criação de um Arquivo docker-compose.yml

Crie um arquivo `docker-compose.yml` em um diretório de projeto:

```bash
mkdir -p ~/docker-projects/postgres-project
cd ~/docker-projects/postgres-project
```

Adicione o seguinte conteúdo ao arquivo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16
    container_name: postgres-db
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: sua_senha
      POSTGRES_DB: meu_banco
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init-scripts:/docker-entrypoint-initdb.d
    networks:
      - postgres-network

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: seu_email@exemplo.com
      PGADMIN_DEFAULT_PASSWORD: sua_senha_pgadmin
    ports:
      - "5050:80"
    depends_on:
      - postgres
    networks:
      - postgres-network

networks:
  postgres-network:
    driver: bridge

volumes:
  postgres_data:
```

### Criação de Scripts de Inicialização (Opcional)

Você pode criar scripts SQL que serão executados automaticamente quando o contêiner for iniciado:

```bash
mkdir -p init-scripts
```

Crie um arquivo `init-scripts/01-create-tables.sql`:

```sql
-- Criar uma tabela de exemplo
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir alguns dados de exemplo
INSERT INTO usuarios (nome, email) VALUES
    ('João Silva', 'joao@exemplo.com'),
    ('Maria Santos', 'maria@exemplo.com');
```

### Iniciar os Serviços com Docker Compose

```bash
# Iniciar os serviços em segundo plano
docker compose up -d

# Verificar os serviços em execução
docker compose ps

# Verificar os logs
docker compose logs
```

### Acesso ao pgAdmin

Após iniciar os serviços, você pode acessar o pgAdmin em seu navegador:

1. Abra o navegador e acesse `http://localhost:5050`
2. Faça login com o email e senha definidos no arquivo `docker-compose.yml`
3. Adicione um novo servidor:
   - Na aba "General", defina um nome para o servidor (ex: "PostgreSQL Local")
   - Na aba "Connection", preencha:
     - Host name/address: `postgres` (nome do serviço no docker-compose)
     - Port: `5432`
     - Maintenance database: `postgres`
     - Username: `postgres`
     - Password: `sua_senha` (definida no docker-compose)
   - Clique em "Save"

## Gerenciamento de Contêineres Docker

### Comandos Básicos do Docker

```bash
# Listar contêineres em execução
docker ps

# Listar todos os contêineres (incluindo os parados)
docker ps -a

# Iniciar um contêiner parado
docker start nome_do_contêiner

# Parar um contêiner
docker stop nome_do_contêiner

# Reiniciar um contêiner
docker restart nome_do_contêiner

# Remover um contêiner
docker rm nome_do_contêiner

# Listar imagens
docker images

# Remover uma imagem
docker rmi nome_da_imagem
```

### Comandos Básicos do Docker Compose

```bash
# Iniciar serviços
docker compose up -d

# Parar serviços
docker compose down

# Parar serviços e remover volumes
docker compose down -v

# Visualizar logs
docker compose logs

# Acompanhar logs em tempo real
docker compose logs -f

# Reiniciar serviços
docker compose restart
```

## Backup e Restauração do PostgreSQL

### Backup de um Banco de Dados

```bash
# Criar um backup de um banco de dados específico
docker exec -t postgres-db pg_dump -U postgres -d meu_banco > backup_meu_banco.sql

# Criar um backup de todos os bancos de dados
docker exec -t postgres-db pg_dumpall -U postgres > backup_todos_bancos.sql
```

### Restauração de um Banco de Dados

```bash
# Restaurar um banco de dados específico
cat backup_meu_banco.sql | docker exec -i postgres-db psql -U postgres -d meu_banco

# Restaurar todos os bancos de dados
cat backup_todos_bancos.sql | docker exec -i postgres-db psql -U postgres
```

## Boas Práticas para Docker e PostgreSQL

### Segurança

1. **Nunca use senhas padrão ou fracas**
   - Altere as senhas padrão e use senhas fortes
   - Considere usar variáveis de ambiente ou um gerenciador de segredos

2. **Limite o acesso à rede**
   - Exponha apenas as portas necessárias
   - Use redes Docker para isolar serviços

3. **Mantenha as imagens atualizadas**
   - Atualize regularmente suas imagens para obter correções de segurança
   - Use tags específicas de versão em vez de `latest`

### Desempenho

1. **Otimize a configuração do PostgreSQL**
   - Ajuste parâmetros como `shared_buffers`, `work_mem` e `effective_cache_size`
   - Crie um arquivo de configuração personalizado e monte-o no contêiner

2. **Use volumes para dados persistentes**
   - Sempre use volumes Docker para armazenar dados do PostgreSQL
   - Evite armazenar dados em camadas de contêiner

### Manutenção

1. **Automatize backups**
   - Configure backups regulares dos seus bancos de dados
   - Armazene backups em locais seguros e externos

2. **Monitore seus contêineres**
   - Use ferramentas como Prometheus e Grafana para monitoramento
   - Configure alertas para problemas de desempenho ou espaço em disco

## Solução de Problemas Comuns

### Erro de Conexão ao PostgreSQL

Se você não conseguir se conectar ao PostgreSQL:

1. Verifique se o contêiner está em execução:
   ```bash
   docker ps | grep postgres
   ```

2. Verifique os logs do contêiner:
   ```bash
   docker logs postgres-db
   ```

3. Verifique se a porta está acessível:
   ```bash
   sudo netstat -tuln | grep 5432
   ```

### Problemas de Permissão do Docker

Se você encontrar erros de permissão ao executar comandos Docker:

```bash
# Verificar se você está no grupo docker
groups | grep docker

# Se não estiver, adicione-se ao grupo e reinicie a sessão
sudo usermod -aG docker $USER
```

## Próximos Passos

Após configurar o Docker e o PostgreSQL, você estará pronto para instalar e configurar o VS Code e o Cursor AI. Consulte o guia "Instalação e Configuração do VS Code e Cursor AI" para continuar.
