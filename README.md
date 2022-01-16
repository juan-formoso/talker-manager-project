# Talker Manager Project

# Contexto
Este projeto consiste no desenvolvimento de uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes. Desenvolvi alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`. Fiz este projeto com a técnica de Desenvolvimento Orientado à Testes.

## Tecnologias usadas

Back-End:
> Desenvolvido usando: Node.js, Express, Nodemon

# Habilidades treinadas

- Realização de operações assíncronas utilizando callbacks;
- Realização de operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever scripts que criam e consomem Promises;
- Reescrever códigos que usam callbacks para que usem Promises;
- Realização de chamadas de funções de forma consciente;
- Entendimento dos conceitos básicos de como o JavaScript funciona;
- Detecção e solução de problemas no código de forma mais objetiva;
- Entendimento da diferença entre execução síncrona e assíncrona;
- Entendimento do que é HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Desenvolvimento de APIs utilizando Node e Express;
- Entendimento da estrutura de uma aplicação Express e organização de código;
- Criação de rotas e aplicação de middlewares.

## Clonando o repositório:

1. Faça o clone
  * `git clone git@github.com:juan-formoso/talker-manager-project.git`.
  * Entre na pasta do repositório clonado:
    * `cd talker-manager-project`

2. Instale as dependências e restaure o arquivo `talkers.json`
  * `npm install`
  * `npm run restore`

3. Crie uma branch a partir da branch `main`
  * `git checkout -b my-new-branch`

4. Se divirta para fazer o que quiser :)

### Rodando a aplicação

Este projeto utiliza o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

Suas dependências já estão configuradas no arquivo `package.json`.

Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.

## Rodando os testes

Este projeto utiliza o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de api.

OBS: Eu **NÃO** fui o responsável pela construção dos arquivos de testes deste projeto, os créditos vão para a equipe de ensino da **Trybe**!

Para poder executar os testes, inicie a aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os testes serão executados.

### Executando um teste específico

Para executar um teste em específico, inicie a aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-arquivo-de-teste`.

Ex: Para executar o teste referente ao **login**, basta digitar `npm test login`.

### DICA

Você pode utilizar **Postman, Insomnia ou httpie** para visualizar a API com mais precisão.

> Links para os sites:
  * [Postman](https://www.postman.com/)
  * [Insomnia](https://insomnia.rest/)
  * [htppie](https://httpie.io/)
