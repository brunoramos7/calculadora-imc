// Função para calcular o IMC
function calcularIMC(peso, altura) {
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        return "Por favor, insira valores válidos para peso e altura.";
    }

    const imc = peso / (altura * altura);
    let mensagem = "Seu IMC é: " + imc.toFixed(2);

    if (imc < 18.5) {
        mensagem += "\nVocê está abaixo do peso ideal.";
    } else if (imc < 24.9) {
        mensagem += "\nVocê está dentro da faixa de peso ideal.";
    } else if (imc < 29.9) {
        mensagem += "\nVocê está com sobrepeso.";
    } else {
        mensagem += "\nVocê está na faixa da obesidade.";
    }

    return mensagem;
}

function calculadora() {
    // Recebe os argumentos
    const args = process.argv.slice(2);

    // Verificando os argumentos
    if (args.length !== 2) {
        console.log("Preencher no terminal da seguinte forma: node app.js <peso> <altura>");
        return;
    }

    // Recebe o peso e a altura
    const peso = parseFloat(args[0]);
    const altura = parseFloat(args[1]) / 100;

    // Calcula o IMC e exibe o resultado
    const resultado = calcularIMC(peso, altura);
    console.log(resultado);
}

calculadora();
