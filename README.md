<h1 align="center">
  Client and Server | Loja Renato Rodas
</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Preview">Visualizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Pré-requesitos">Pré-requesitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executar Projeto">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Banco de Dados">Banco de Dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Alunos">Alunos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Professores">Professores</a>
</p>

<p align="center">
  <img src="https://github.com/Arthur-SD15/PTAS-2-Cadastro-Pessoas/raw/main/logo_ifms.png" width="300px">
</p>

## 💻 Projeto

O projeto interdisciplinar desenvolvido no IFMS Campus Nova Andradina teve como objetivo a criação de uma aplicação web completa, utilizando conhecimentos das disciplinas de Banco de Dados, Programação e Tecnologias para Aplicações Servidor e Programação e Tecnologias para Aplicações Cliente. A aplicação desenvolvida foi um e-commerce para um comércio chamado "Renato Rodas".

Durante o desenvolvimento, foi utilizado o Banco de Dados PostgreSQL, no qual foram inseridos inicialmente 20 produtos. Além disso, foram implementados métodos de inserção, remoção e recuperação de produtos.

Para a criação da aplicação, foram utilizadas técnicas e ferramentas como React.js e Next.js, que são bibliotecas e frameworks amplamente utilizados para o desenvolvimento de aplicações web. O Tailwind também foi empregado para a estilização da aplicação, proporcionando uma interface visual atraente.

A comunicação entre o cliente e o servidor foi realizada por meio do consumo de dados utilizando a API Fetch. O projeto foi gerado utilizando as técnicas aprendidas em aula, utilizando o framework Express e Sequelize para a criação das rotas e métodos de inserção, remoção e recuperação de produtos.


## 👀 Preview

| Início | Produtos |
|----------|----------|
| ![Descrição da imagem 1](PTAC/public/inicio.png) | ![Descrição da imagem 2](PTAC/public/produtos.png) |

| Produto | Alterar |
|----------|----------|
| ![Descrição da imagem 3](PTAC/public/produto.png) | ![Descrição da imagem 4](PTAC/public/alterar.png) |


## 📝 Pré-requesitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)


## 🗂 Executar Projeto

```bash
# Clonar Projeto.
$ git clone https://github.com/Arthur-SD15/ClientServer-RenatoRodas.git

# Entrar na pasta PTAS.
$ cd PTAS

# Baixar as dependencias.
$ npm install

# Executar.
$ npm start

# Novo cmd.
# Entrar na pasta PTAC.
$ cd PTAC

# Baixar as dependencias.
$ npm install

# Executar.
$ npm run dev

 ```

## 📬 Banco de Dados
```bash
# É necessário criar um  Banco de Dados, recomenda-se que seja por meio do PostgreSQL.
# Criar tabela e armazenar as informações inicial, como por exemplo, as que estão disponível no arquivo sql.sql.
# Configurar connectionString, disponível em db.js, preenchendo com as informações respectivas que foram criada no seu Banco de Dados.

$ postgres://<username>:<password>@<host>:<port>/<database>
 ```


## 🧑 Alunos

- Arthur Silva Dantas
- Renato Borges Lazarini

## 🧑‍🏫 Professores

- Lucas Hermann Negri - Banco de Dados
- Luiz Fernando Picolo - Programação e Tecnologias para Aplicações Servidor
- Marcelino Vitor - Programação e Tecnologias para Aplicações Cliente
