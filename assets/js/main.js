// Capturar evento de submit do formulario
const form = document.querySelector('#formulario');

//executar o submit e prevenir o reload da pag
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); //capturar os dados dos input
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //converter os input para number
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return; //caso nao seja um numero o peso tiver inválido pare aqui
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return; //caso nao seja um numero a altura tiver inválido pare aqui
    }

    const imc = getImc(peso, altura); //calcular o imc, precisa receber o peso e a altura
    const nivelImc = getNivelImc(imc); //nivel do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; //mensagem mostradacom os valores

    setResultado(msg, true); //set o resultado com a flag true

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]; //array, list de string 

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}
//criando a função imc, para fazer o calculo
function getImc (peso, altura) { 
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//cria um  p = paragrafo
function criaP(){
    const p = document.createElement('p'); 
    return p;
}

//Função para set o resultado e se ele é valido
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //zerar o resultado

    const p = criaP ();

    if (isValid) { //se for valido fica verde, se for invalido (bad) fica vermelho
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg; 
    resultado.appendChild(p); //adiciona um p com o resultado.
}