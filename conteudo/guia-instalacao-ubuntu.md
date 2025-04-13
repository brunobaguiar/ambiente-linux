# Guia de Instalação do Ubuntu 22.04 LTS no VirtualBox

Este guia fornece instruções detalhadas para criar uma máquina virtual no Oracle VirtualBox e instalar o Ubuntu 22.04 LTS (Jammy Jellyfish), preparando um ambiente ideal para desenvolvimento.

## Pré-requisitos

Antes de começar, certifique-se de que:

- O Oracle VirtualBox está instalado corretamente (consulte o guia "Instalação do Oracle VirtualBox")
- Seu computador possui recursos suficientes para executar uma máquina virtual:
  - Mínimo de 4 GB de RAM (8 GB ou mais recomendado)
  - Pelo menos 25 GB de espaço livre em disco
  - Processador com suporte à virtualização ativado

## Download da Imagem ISO do Ubuntu 22.04 LTS

1. Acesse o site oficial de releases do Ubuntu: [https://releases.ubuntu.com/jammy/](https://releases.ubuntu.com/jammy/)
2. Baixe a imagem "64-bit PC (AMD64) desktop image" (aproximadamente 3.5 GB)
3. Verifique a integridade do arquivo baixado (opcional, mas recomendado):
   - Baixe o arquivo SHA256SUMS da mesma página
   - No Windows, use o PowerShell: `Get-FileHash -Algorithm SHA256 ubuntu-22.04.5-desktop-amd64.iso`
   - No Linux/macOS, use o terminal: `sha256sum ubuntu-22.04.5-desktop-amd64.iso`
   - Compare o hash gerado com o correspondente no arquivo SHA256SUMS

## Criação da Máquina Virtual no VirtualBox

1. Abra o Oracle VirtualBox
2. Clique no botão "Novo" na barra de ferramentas

### Configurações Básicas

3. Configure a nova máquina virtual:
   - Nome: `Ubuntu-22.04-Dev` (ou outro nome de sua preferência)
   - Pasta da máquina: Mantenha o padrão ou escolha uma localização com espaço suficiente
   - Tipo: Linux
   - Versão: Ubuntu (64-bit)
   - Clique em "Próximo"

### Configuração de Memória e CPU

4. Aloque recursos para a máquina virtual:
   - Memória RAM: Mínimo de 2048 MB (2 GB), recomendado 4096 MB (4 GB) ou mais
   - CPUs: Mínimo de 2, recomendado 4 (se disponível)
   - Habilite PAE/NX (geralmente ativado por padrão)
   - Clique em "Próximo"

### Configuração de Disco Rígido

5. Configure o disco rígido virtual:
   - Selecione "Criar um novo disco rígido virtual agora"
   - Tipo de arquivo: VDI (VirtualBox Disk Image)
   - Armazenamento: Dinamicamente alocado (economiza espaço no disco físico)
   - Tamanho: Mínimo de 25 GB, recomendado 50 GB ou mais para desenvolvimento
   - Clique em "Criar"

### Configurações Adicionais (Recomendadas)

6. Com a máquina virtual selecionada, clique em "Configurações"

7. **Configurações de Sistema**:
   - Aba "Motherboard": Ative "Relógio da máquina em tempo UTC"
   - Aba "Processador": Verifique se "Habilitar PAE/NX" está marcado

8. **Configurações de Display**:
   - Aba "Tela": Aumente a memória de vídeo para 128 MB
   - Ative "Aceleração 3D" (melhora o desempenho da interface gráfica)

9. **Configurações de Rede**:
   - Aba "Adaptador 1": Verifique se está ativado e configurado como "NAT"

10. **Configurações de Armazenamento**:
    - Selecione o controlador IDE ou SATA vazio
    - Clique no ícone de disco à direita de "Unidade Óptica"
    - Escolha "Selecionar arquivo de disco"
    - Navegue até a imagem ISO do Ubuntu 22.04 LTS baixada anteriormente e selecione-a

11. Clique em "OK" para salvar todas as configurações

## Instalação do Ubuntu 22.04 LTS

1. Com a máquina virtual selecionada, clique em "Iniciar"
2. A máquina virtual iniciará a partir da imagem ISO do Ubuntu

### Configuração Inicial

3. Selecione o idioma desejado (recomendamos "Português do Brasil" para este tutorial)
4. Clique em "Experimentar ou instalar o Ubuntu"
5. Aguarde o carregamento do ambiente live

### Assistente de Instalação

6. Quando o ambiente live carregar, clique no ícone "Instalar o Ubuntu"
7. Selecione o idioma e clique em "Continuar"
8. Em "Atualizações e outro software":
   - Selecione "Instalação normal"
   - Marque "Baixar atualizações enquanto instala o Ubuntu"
   - Marque "Instalar software de terceiros para hardware gráfico e Wi-Fi e formatos de mídia adicionais"
   - Clique em "Continuar"

### Particionamento do Disco

9. Em "Tipo de instalação":
   - Para iniciantes: selecione "Apagar disco e instalar o Ubuntu" (opção mais simples)
   - Para configuração avançada: selecione "Algo mais" (particionamento manual)
   - Clique em "Instalar agora"
10. Confirme as alterações no disco clicando em "Continuar"

### Configuração Regional

11. Escolha seu fuso horário no mapa ou digite sua localização
12. Clique em "Continuar"

### Criação de Usuário

13. Configure seu usuário:
    - Seu nome: Digite seu nome completo
    - Nome do computador: Um nome para identificar a máquina na rede (ex: ubuntu-dev)
    - Nome de usuário: Seu nome de usuário para login
    - Senha: Crie uma senha segura e confirme-a
    - Selecione "Solicitar minha senha para entrar"
    - Clique em "Continuar"

### Processo de Instalação

14. Aguarde enquanto o Ubuntu é instalado (isso pode levar alguns minutos)
15. Quando a instalação for concluída, clique em "Reiniciar agora"
16. Quando solicitado, pressione Enter para reiniciar a máquina virtual
17. Se a máquina não ejetar automaticamente a mídia de instalação, vá para Dispositivos > Mídia Óptica > Remover disco da unidade virtual

## Primeiro Login e Configuração Inicial

1. Na tela de login, digite a senha que você criou durante a instalação
2. Após o login, o Ubuntu exibirá uma tela de boas-vindas com opções de configuração:
   - Conectar contas online (opcional)
   - Configurar o Livepatch (opcional)
   - Ajudar a melhorar o Ubuntu (opcional)
   - Configurar atualizações de software (recomendado manter as opções padrão)
   - Explorar o software disponível (opcional)
3. Clique em "Concluído" quando terminar

## Instalação dos VirtualBox Guest Additions

As Guest Additions melhoram a integração entre o sistema host e a máquina virtual, oferecendo recursos como:
- Melhor desempenho gráfico
- Integração do mouse (movimento suave entre host e VM)
- Compartilhamento de área de transferência
- Compartilhamento de pastas
- Melhor suporte a resolução de tela

Para instalar:

1. Com a máquina virtual em execução, vá para o menu "Dispositivos" do VirtualBox
2. Clique em "Inserir imagem de CD dos Adicionais para Convidado"
3. Se a execução automática não iniciar, abra o Terminal e execute:
   ```bash
   cd /media/$USER/VBox_GAs_*
   sudo ./VBoxLinuxAdditions.run
   ```
4. Aguarde a conclusão da instalação
5. Reinicie a máquina virtual

## Verificação da Instalação

Após reiniciar, verifique se tudo está funcionando corretamente:

1. Abra o Terminal (Ctrl+Alt+T)
2. Execute o comando `lsb_release -a` para verificar a versão do Ubuntu
3. Execute `free -h` para verificar a memória disponível
4. Execute `df -h` para verificar o espaço em disco

## Próximos Passos

Após instalar o Ubuntu 22.04 LTS com sucesso, você estará pronto para configurar o ambiente de desenvolvimento. Consulte o guia "Configuração Pós-instalação do Ubuntu" para continuar.
