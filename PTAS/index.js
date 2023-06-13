const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const app = express();
const cors= require('cors');
app.use(cors());

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
    console.error('Erro ao buscar os produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produtos', async function(req, res){
  try {
    var produto = await Produto.selectOne(req.body.id);
    res.json(produto.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produto', async function(req, res){
  try {
    var produto = await Produto.insert(req.body);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.delete("/produto", async function (req, res) {
  try {
    var produto = await Produto.delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    res.status(500).json({ error: "Ocorreu um erro ao atualizar produto" });
  }
});

app.listen(3003, function() {
  console.log(`App de exemplo escutando na porta ${3003}!`)
});