# Guia de Instalação do Oracle VirtualBox

Este guia fornece instruções detalhadas para instalar o Oracle VirtualBox, um software de virtualização poderoso e gratuito que permite executar múltiplos sistemas operacionais em uma única máquina física.

## Pré-requisitos

Antes de instalar o VirtualBox, verifique se seu sistema atende aos seguintes requisitos:

- Processador: CPU Intel ou AMD de 64 bits com suporte à virtualização (Intel VT-x ou AMD-V)
- Memória RAM: Mínimo de 4 GB (recomendado 8 GB ou mais para melhor desempenho)
- Espaço em disco: Mínimo de 10 GB para o VirtualBox e espaço adicional para máquinas virtuais
- Sistema operacional host: Windows, macOS ou Linux

Para verificar se seu processador suporta virtualização:
- **Windows**: Use o Task Manager (Ctrl+Shift+Esc) > Performance > CPU e verifique "Virtualization"
- **Linux**: Execute `grep -E 'svm|vmx' /proc/cpuinfo` no terminal (se retornar resultados, a virtualização é suportada)

## Download do VirtualBox

1. Acesse o site oficial do VirtualBox: [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
2. Baixe a versão correspondente ao seu sistema operacional:
   - Para Windows: "Windows hosts"
   - Para macOS: "macOS / Intel hosts" ou "macOS / Apple Silicon hosts" (dependendo do seu Mac)
   - Para Linux: Clique em "Linux distributions" e selecione sua distribuição

## Instalação no Windows

1. Localize o arquivo baixado (geralmente `VirtualBox-[versão]-Win.exe`) e execute-o com privilégios de administrador
2. Se aparecer um aviso de segurança, clique em "Sim" para permitir a instalação
3. Na tela de boas-vindas do instalador, clique em "Next"
4. Mantenha as opções padrão de instalação e clique em "Next"
5. Na tela de aviso sobre interfaces de rede, clique em "Yes" para continuar
6. Clique em "Install" para iniciar a instalação
7. Durante a instalação, pode aparecer um aviso sobre a instalação de drivers. Clique em "Install" para cada um deles
8. Após a conclusão, marque a opção "Start Oracle VM VirtualBox after installation" e clique em "Finish"

## Instalação no macOS

1. Localize o arquivo baixado (geralmente `VirtualBox-[versão]-OSX.dmg`) e abra-o
2. Clique duas vezes no ícone do VirtualBox para iniciar o instalador
3. Siga as instruções na tela para completar a instalação
4. Se aparecer um aviso sobre "software do desenvolvedor", vá para Preferências do Sistema > Segurança e Privacidade e clique em "Permitir"
5. Após a instalação, o VirtualBox estará disponível na pasta Aplicativos

## Instalação no Linux (Ubuntu/Debian)

### Método 1: Via Repositório (Recomendado)

Para Ubuntu 22.04 LTS (Jammy), execute os seguintes comandos no terminal:

```bash
# Adicionar a chave GPG do repositório
wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg --dearmor

# Adicionar o repositório ao sources.list
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list

# Atualizar os repositórios
sudo apt-get update

# Instalar o VirtualBox
sudo apt-get install -y virtualbox-7.1
```

### Método 2: Via Pacote .deb

1. Acesse [https://www.virtualbox.org/wiki/Linux_Downloads](https://www.virtualbox.org/wiki/Linux_Downloads)
2. Baixe o pacote .deb correspondente à sua distribuição
3. Instale o pacote com o seguinte comando:
   ```bash
   sudo dpkg -i virtualbox-7.1_*.deb
   # Se houver dependências faltando, execute:
   sudo apt-get install -f
   ```

## Instalação do VirtualBox Extension Pack

O Extension Pack adiciona recursos importantes como suporte a USB 2.0/3.0, VirtualBox RDP e criptografia de disco.

1. Acesse [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
2. Baixe o "Oracle VM VirtualBox Extension Pack"
3. Abra o VirtualBox
4. Vá para Arquivo > Preferências > Extensões
5. Clique no botão "+" à direita
6. Selecione o arquivo do Extension Pack baixado
7. Siga as instruções na tela e aceite os termos de licença

## Verificação da Instalação

1. Abra o VirtualBox
2. Verifique se a interface principal é exibida sem erros
3. Vá para Ajuda > Sobre o VirtualBox para confirmar a versão instalada
4. Verifique se o Extension Pack está instalado em Arquivo > Preferências > Extensões

## Solução de Problemas Comuns

### Erro de Virtualização

Se você receber um erro sobre virtualização desativada:
1. Reinicie o computador
2. Entre na BIOS/UEFI (geralmente pressionando F2, F10, DEL ou ESC durante a inicialização)
3. Procure por opções como "Intel VT-x", "AMD-V", "Virtualization Technology" ou "SVM Mode"
4. Ative essas opções
5. Salve as alterações e reinicie

### Conflitos com Outros Softwares de Virtualização

O VirtualBox pode conflitar com outros softwares de virtualização como VMware ou Hyper-V. Se encontrar problemas:
1. No Windows, desative o Hyper-V: `dism.exe /Online /Disable-Feature:Microsoft-Hyper-V`
2. Reinicie o sistema
3. Tente instalar o VirtualBox novamente

### Problemas de Permissão no Linux

Se encontrar problemas de permissão no Linux:
1. Adicione seu usuário ao grupo vboxusers:
   ```bash
   sudo usermod -aG vboxusers $USER
   ```
2. Faça logout e login novamente para aplicar as alterações

## Próximos Passos

Após instalar o VirtualBox com sucesso, você estará pronto para criar sua primeira máquina virtual e instalar o Ubuntu 22.04 LTS nela. Consulte o guia "Instalação do Ubuntu 22.04 LTS no VirtualBox" para continuar.
