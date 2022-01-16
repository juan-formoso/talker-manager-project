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

# Instruções para entregar seu projeto

## Antes de começar a desenvolver:

1. Clone o repositório

- `git clone git@github.com:tryber/sd-014-b-project-talker-manager.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-014-b-project-talker-manager`

2. Instale as dependências [**Caso existam**]

- `npm install`

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b joaozinho-sd-014-b-project-talker-manager`

### Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Live reload

Usaremos o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.

---

## Testes

Usaremos o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de api.

Este projeto já vem configurado e com suas dependências

### Executando todos os testes

Para poder executar os testes, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os seus testes serão executados.

### Executando um teste específico

Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

Ex: Para executar o teste referente ao **login**, basta digitar `npm test login`.

---
