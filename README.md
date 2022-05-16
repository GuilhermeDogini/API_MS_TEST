# Resumo projeto

Projeto destiando ao Back-end, Contendo um CRUD e um Authentication.

---

## Sobre o projeto

O **Projeto** são duas APIs contendo um CRUD(Create, Read, Update e Delete) usando o Postman para consultas e criações e o Docker para fazer a conexão.
Na API Authentication fazemos as consultas e verificações de tokens dos usuários para verificar sua conexão com o banco.

*É necessário ter o Docker instalado para a conexão com o banco de dados
*É necessário ter o Postman instalado para a consulta no banco de dados
---

## Stack

Este projeto foi desenvolvido com as seguintes tecnologias:

  - Node
  - Docker
  - express
  - lint
  - prettier
  
*É necessário possuir a versão 12 ou superior do Node para executar o projeto.*

---

## Início Rápido

Para obter uma cópia do projeto em sua máquina local, abra o terminal e faça a execução dos seguintes comandos:

```bash
# Clonar repositório
$ git clone https://github.com/GuilhermeDogini/API_MS_TEST.git
```
---

## Executando Local

```bash

# Entrar no diretório raíz
$ cd API_MS_TEST

# Instalar dependências do repositório de autencicação e iniciar projeto
$ cd auth 
$ npm install
$ npm start

# Instalar dependências do repositório do CRUD e iniciar projeto
$ cd crud 
$ npm install
$ npm start

```
---

## Executando com Docker

```bash

# Entrar no diretório raíz
$ cd API_MS_TEST

# Instalar dependências do repositório de autencicação e iniciar projeto
$ docker-compose up -d --build

```
---

## Executando com o Postman

```bash

# Entrar no diretório raíz
Crie dois projetos com nomes parecidos a esse "API CRUD" e "API Auth JWT" e adicione as rotas a baixo

*Antes de criarmos as rotas vamos criar uma variável em ambas APIs chamada "URL" com o initial value "http://localhost:4000" e o current value "http://localhost:4000"
*Para acessar a variável entre em "API CRUD" ou "API Auth JWT" e em variables e adicione suas variaveis lá 
```
---


## Rotas API CRUD

:grey_exclamation: *Desenvolvedor, para cada rota criada, favor adicionar aqui!*

- Boas vindas:
```
  /{{URL}}/api/health/check

```
- Verificação de Pessoas:
```
  /{{URL}}/api/person

*É preciso usar o token pego na rota 

```

- Verificação de uma pessoa apenas:
```
  {{URL}}/api/person/id

*É preciso usar o token pego na rota 
*É preciso do id para verificar a existencia de uam unica pessoa, que pode ser pego na rota /{{URL}}/api/person

```

- Criação de Pessoas:
```
  /{{URL}}/api/person 

*É preciso usar o token pego na rota 
*É necessario utilizar o "body" com o filtro "Raw" e a linguagem JSON

```
- Atualização de pessoas:
```
  /{{URL}}/api/person/id

*É preciso usar o token pego na rota 
*É preciso do id para atualizar uma pessoa, que pode ser pego na rota /{{URL}}/api/person


```
- Atualização de pessoas:
```
  /{{URL}}/api/person/id

*É preciso usar o token pego na rota 
*É preciso do id para deletar uma pessoa, que pode ser pego na rota /{{URL}}/api/person


```

---

## Rotas API Auth JWT

:grey_exclamation: *Desenvolvedor, para cada rota criada, favor adicionar aqui!*

- Boas vindas:
```
  /{{URL}}/api/health/check

```
- Verificação de Pessoas:
```
  /{{URL}}/api/user/id

*É preciso usar o token pego na rota 
*É preciso do id para atualizar uma pessoa, que pode ser pego na rota /{{URL}}/api/person

```

- Verificação do token:
```
  /{{URL}}/api/auth/validation

*É preciso usar o token pego na rota 

```

- Registrar usuário:
```
  /{{URL}}/api/auth/register

*É preciso usar o token pego na rota 
*É necessario utilizar o "body" com o filtro "Raw" e a linguagem JSON

```
- Login do usuário:
```
  /{{URL}}/api/auth/login

*É preciso usar o token pego na rota 
*É necessario utilizar o "body" com o filtro "Raw" e a linguagem JSON


```


---











