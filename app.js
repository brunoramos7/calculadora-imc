const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculadoradeimc.html'));
});

// Rota para processar o formulário
app.post('/', (req, res) => {
  let peso = parseFloat(req.body.peso);
  let alturaCm = parseFloat(req.body.altura);
  let alturaM = alturaCm / 100;

  let imc = peso / (alturaM * alturaM);
  let resultado = `Seu IMC é ${imc.toFixed(2)}`;

  if (imc < 18.5) {
    resultado += "\nVocê está abaixo do peso ideal.";
} else if (imc < 24.9) {
    resultado += "\nVocê está dentro da faixa de peso ideal.";
} else if (imc < 29.9) {
    resultado += "\nVocê está com sobrepeso.";
} else {
    resultado += "\nVocê está na faixa da obesidade.";
}

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora de IMC</title>
    </head>
    <body>
        <h1>Calculadora de IMC</h1>
        <form action="/" method="post">
            <label for="peso">Peso (kg):</label>
            <input type="number" id="peso" name="peso" required><br><br>
            
            <label for="altura">Altura (cm):</label>
            <input type="number" id="altura" name="altura" required><br><br>
            
            <button type="submit">Calcular</button>
        </form>

        <div id="resultado">${resultado}</div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
