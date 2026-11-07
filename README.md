# Sistema de Abertura e Gerenciamento de Ordens de Serviço

Sistema web desenvolvido para registrar e acompanhar solicitações de manutenção de equipamentos de informática.

O projeto tem como objetivo organizar o processo de abertura de chamados e facilitar o acompanhamento dos serviços pela equipe de TI.

## Funcionalidades

### Abertura de Ordens de Serviço
- Identificação do solicitante.
- Informações sobre posto ou graduação e seção.
- Seleção do tipo de equipamento.
- Descrição detalhada do problema.
- Registro automático de data e número da ordem de serviço.
- Confirmação de abertura do chamado.

### Painel de Gerenciamento de TI
- Listagem das ordens de serviço registradas.
- Visualização dos detalhes dos chamados.
- Acompanhamento do status das solicitações.
- Atualização de status: Aberta, Em andamento e Concluída.
- Ocultação dos chamados concluídos da listagem.
- Atualização automática do painel.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage (armazenamento local no navegador)

## Como executar

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo `index.html` utilizando um servidor local, como a extensão Live Server do Visual Studio Code.
4. Para acessar o painel de gerenciamento, abra `painel-ti.html` pelo mesmo servidor local.

## Observações

Esta é uma versão inicial do sistema, com armazenamento de dados no LocalStorage do navegador. Dessa forma, os registros não são compartilhados entre diferentes dispositivos ou navegadores.

O projeto possui possibilidades de evolução, incluindo integração com banco de dados, autenticação de usuários e armazenamento centralizado das ordens de serviço.

## Autor

Igor Castro

[GitHub](https://github.com/igoralmeidacst)
