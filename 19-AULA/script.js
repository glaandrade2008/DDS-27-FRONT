console.log("Manda um oi ai pra eu ver");

//FUNÇÕES
// SÓ EXECUTA 
function teste(){
    console.log("Estou funcionando");
    
}

// EXECUTANDO A FUNÇÃO
teste()

// COM RETORNO
function soma(){
    return 3 + 4
}

console.log(soma());

//Mostra apenas o texto da função, não executa
console.log(soma);


// com parametros
function teste2(parametro){
    console.log("O parametro enviado foi: ", parametro); 
}

// executado
teste2("Arroz")

var nome = "Guilherme"
teste2(nome)

//FAZ AÇÕES E RETORNA RESULTADOS
function media(n1, n2){
    let resultado = (n1 + n2) / 2
    return resultado
}

// GUARDA RESULTADO EM VARIAVEL, PRA DEPOIS UTILIZAR
var final = media(9,7)
console.log("Resultado da média: ", final);

//FUNÇÃO ANONIMA
var mensagem = function (){
    console.log("Oi, meu chapa");
}

//mostra o texto da função
console.log(mensagem);

// Apenas guarda o txto da função
mensagem

// Executa a função, coloco os ()
mensagem()

// ARROW FUNCTION - FUNÇÃO DE SETA
//FORMA MAIS COMUM DE ESCREVER FUNÇÕES NO JAVASCRIPT
const multiplicar = (x,y) => {
    let result, primeiro = x, segundo = y
    result = primeiro * segundo
    return x * y
}

console.log("O resultado do multiplicador é: ", multiplicar(7,4));

//MAIS MENOR AINDA
// QUANDO SÓ TEM UMA LINHA DE RETORNO, O RETORNO PODE SER OMITIDO TAMBEM
const dobro = numero => numero * 2

console.log("O dobro é: ", dobro(42));
