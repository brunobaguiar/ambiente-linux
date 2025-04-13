# Informações sobre o Oracle VirtualBox

## Versão Atual
- Oracle VirtualBox 7.1.6 (última versão disponível em abril de 2025)

## Site Oficial
- [VirtualBox.org](https://www.virtualbox.org/)
- [Página de Downloads](https://www.virtualbox.org/wiki/Downloads)

## Requisitos de Sistema para o VirtualBox

### Requisitos Gerais
- Processador recente Intel ou AMD (64-bit recomendado)
- Mínimo de 512 MB de RAM (recomendado mais para melhor desempenho)
- Espaço em disco para o VirtualBox e para as máquinas virtuais
- Sistema operacional host compatível (Windows, macOS, Linux)

### Para Sistemas Linux
- Kernel Linux compatível
- Pacotes de desenvolvimento do kernel instalados para recursos avançados
- Arquitetura do pacote deve corresponder à arquitetura do kernel Linux

## Instalação no Ubuntu

### Via Repositório (Recomendado)
Para Ubuntu 22.04 LTS (Jammy), adicione o repositório oficial do VirtualBox:

```bash
# Adicionar a chave GPG do repositório
wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg --dearmor

# Adicionar o repositório ao sources.list
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list

# Atualizar os repositórios
sudo apt-get update

# Instalar o VirtualBox
sudo apt-get install virtualbox-7.1
```

### Extension Pack
O VirtualBox Extension Pack adiciona funcionalidades importantes como:
- Suporte a USB 2.0 e 3.0
- VirtualBox RDP
- Criptografia de disco
- Boot PXE para placas de rede Intel

Para instalar o Extension Pack:
1. Baixe o pacote da [página oficial de downloads](https://www.virtualbox.org/wiki/Downloads)
2. Abra o VirtualBox
3. Vá para Arquivo > Preferências > Extensões
4. Adicione o pacote baixado

## Notas Importantes
- O VirtualBox base é licenciado sob GPL v3
- O Extension Pack é gratuito apenas para uso pessoal e educacional
- Para uso comercial do Extension Pack, é necessária uma licença comercial
- Verifique a integridade dos pacotes baixados usando os checksums SHA256 disponíveis no site oficial
