// API simples para simular o uso da regra de negócio
// Função calcularValorFinal gerada com auxílio do GitHub Copilot

const express = require('express');
const { calcularValorFinal } = require('./order');

const app = express();
app.use(express.json());

app.post('/calcular', (req, res) => {
  const { valorTotal, percentualDesconto } = req.body;

  try {
    const valorFinal = calcularValorFinal(valorTotal, percentualDesconto);
    res.json({ valorFinal });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});