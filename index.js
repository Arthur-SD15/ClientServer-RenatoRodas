const express = require('express');
const path = require('path');
const Produto = require("./models/produto");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/produtos', async function(req, res){
  try {
    var produtos = await Produto.select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pessoas' });
  }
});

app.post('/produtos', async function(req, res){
  try {
    var produtos = await Produto.insert(req.body);
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pessoas' });
  }
});

app.post('/produtos', async function(req, res){
  try {
    var produtos = await Produto.delete(req.body.id);
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar pessoas:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar pessoas' });
  }
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});