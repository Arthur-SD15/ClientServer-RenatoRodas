<h1 align="center">
  ClientServer | Renato Rodas
</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Banco de Dados">Banco de Dados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executar Projeto">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Alunos">Alunos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Professores">Professores</a>
</p>

<p align="center">
  <img src="/assets/logo-ifms.png" width="350px">
</p>


## :earth_americas: Projeto

Projeto desenvolvido no Instituto Federal de Mato Grosso do Sul, teve como objetivo criar uma aplicação web completa, integrando conhecimentos das disciplinas de Banco de Dados, Programação e Tecnologias para Aplicações Servidor e Cliente.

A aplicação foi projetada para o gerenciamento interno de produtos de um e-commerce chamado Renato Rodas. Durante o desenvolvimento, foi utilizado o Banco de Dados PostgreSQL para armazenar e gerenciar as informações. Foram implementados os métodos CRUD.

A interface da aplicação foi construída com React.js e Next.js. Para estilização, utilizou-se o Tailwind CSS, a comunicação entre o cliente e o servidor foi realizada por meio da API Fetch, possibilitando o consumo de dados.

O backend do projeto foi desenvolvido utilizando o framework Express, enquanto o Sequelize foi empregado como ORM para facilitar a criação de rotas e o gerenciamento de operações no banco de dados.


## :card_file_box: Banco de Dados
```bash
# É necessário criar um  Banco de Dados, recomenda-se que seja por meio do PostgreSQL.
# Configurar o .env, preenchendo com as informações respectivas que foram criada no seu Banco de Dados.

$ NEXT_PUBLIC_URL_API=postgres://<username>:<password>@<host>:<port>/<database>
 ```


## :pause_button: Executar
```bash
# Clonar Projeto.
$ git clone https://github.com/Arthur-SD15/ClientServer-RenatoRodas.git

# Entrar na pasta PTAS.
$ cd PTAS

# Baixar as dependencias.
$ npm install

# Executar.
$ npm start

# Entrar na pasta PTAC.
$ cd PTAC

# Baixar as dependencias.
$ npm install

# Executar.
$ npm run dev
 ```


## :man: Alunos

- Arthur Silva Dantas
- Renato Borges Lazarini

## :man_teacher: Professores

- Lucas Hermann Negri - Banco de Dados
- Luiz Fernando Picolo - Programação e Tecnologias para Aplicações Servidor
- Marcelino Vitor - Programação e Tecnologias para Aplicações Cliente
