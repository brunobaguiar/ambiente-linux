# Informações sobre o Ubuntu 22.04 LTS

## Versão Atual
- Ubuntu 22.04.5 LTS (Jammy Jellyfish)
- Suporte de longo prazo (LTS) até abril de 2027

## Site Oficial
- [Ubuntu.com](https://ubuntu.com/)
- [Página de Download](https://ubuntu.com/download/desktop)
- [Releases Ubuntu](https://releases.ubuntu.com/jammy/)

## Requisitos de Sistema para o Ubuntu 22.04 LTS

### Requisitos Mínimos
- Processador: 2 GHz dual-core ou superior
- Memória RAM: 4 GB para instalação física, 2 GB para instalação virtualizada
- Espaço em disco: 25 GB (mínimo recomendado)
- Placa de vídeo e monitor capazes de suportar resolução 1024x768
- Unidade USB ou DVD para mídia de instalação (se não for instalado via rede)

### Arquiteturas Suportadas
- amd64 (64-bit Intel/AMD) - Recomendada para a maioria dos usuários
- arm64 (64-bit ARM)
- armhf (32-bit ARM)
- ppc64el (64-bit Power)
- riscv64 (64-bit RISC-V)
- s390x (64-bit Mainframe)

## Opções de Download
- **Imagem Desktop**: Permite experimentar o Ubuntu sem alterar o computador e, opcionalmente, instalá-lo permanentemente depois.
- **Imagem Server**: Para instalação permanente em um servidor, sem interface gráfica.
- **Imagens alternativas**: Disponíveis via BitTorrent e outros métodos.

## Processo de Instalação Básico
1. Baixar a imagem ISO do Ubuntu 22.04 LTS
2. Criar uma mídia de instalação (USB bootável usando ferramentas como balenaEtcher)
3. Inicializar o computador a partir da mídia de instalação
4. Seguir o assistente de instalação para configurar idioma, layout de teclado, rede, particionamento e contas de usuário

## Instalação no VirtualBox
Para instalar o Ubuntu 22.04 LTS no VirtualBox, é necessário:
1. Criar uma nova máquina virtual no VirtualBox
2. Alocar recursos adequados (memória, CPU, disco)
3. Configurar a máquina virtual para inicializar a partir da imagem ISO do Ubuntu
4. Seguir o assistente de instalação normalmente

## Notas Importantes
- O Ubuntu 22.04 LTS é uma versão com suporte de longo prazo, recebendo atualizações de segurança por 5 anos
- Para melhor desempenho em máquinas virtuais, recomenda-se alocar pelo menos 2 GB de RAM e 2 núcleos de CPU
- Após a instalação, é importante executar a atualização do sistema para obter as correções mais recentes
