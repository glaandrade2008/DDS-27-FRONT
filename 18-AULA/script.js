/*
console.log("AOBA");

//LAÇOS DE REPETIÇÃO

// FOR = PARA/DURANTE
// i = variável de controle
// i < 10 = duração do laço
// i++ = aumenta a interação de 1 em 1

for(var i = 0 ; i < 10 ; i++ ){
    console.log("Meu nome é Neymar Jr😂");
    
    
    
}

console.log("ACA BOU !!!");


// WHILE = ENQUANTO

var contagem = 1

while (contagem < 51) {
    console.log("Oi, meu chapa 🦕");
    contagem = contagem + 5
    
}

console.log("FIN ALI SOU !");

// ARRAY 
var lista = ['Arroz', 0, true, "outro", 7.7, ["Sim", ["Não"]]]

// MOSTRA O ARRAY
console.log(lista);

// MOSTRA ELEMENTO ESPECIFICO
console.log(lista[3]);

// LENGTH = retorna o número de itens no array
console.log(lista.length);

//LISTA DE TIMES
var times = ["São Paulo", "Gama", "Santos", "Real Madrid", "Desportiva"]

//interage ocm valor fixo
for(var i = 0; i < 5; i++){
    console.log("O time atual é: ", times[i]);
    
}

// interage com valor retornado
for(var i = 0; i < times.length; i++){
    console.log("O time atual é: ", times[i]);
    
}
*/

// FUNÇÕES PARA INTERAGIR COM UM ARRAY
var frutas = ["Tangerina", "Guaraná", "Morango", "Maçã", "Uva verde", "Goiaba"]

// ARRAY ORIGINAL
console.log(frutas);

// PRA ADIÇÃO DE ELEMENTOS
// push - adiciona no fim do array
frutas.push("Uva")
console.log(frutas);

// UNSHIFT = adiciona no inicio do array
frutas.unshift("Maracuja")
console.log(frutas);

// PRA REMOÇÃO DE ELEMENTOS
// POP = remova o último elemento
var frutaRetirada = frutas.pop()
console.log("A última fruta era: ", frutaRetirada);

frutas.unshift("Banana")

//SHIFT = remover do inicio da array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era: ", exPrimeiraFruta);

// DESCOBRIR SE HÁ UM VALOR ESPECIFICO NESSE ARRAY
console.log("Garçom, tem pitu?: ", frutas.includes("Pitu"));
console.log("Garçom, tem maracujá?: ", frutas.includes("Maracuja"));

//SORT = ORDERNAR O ARRAY
frutas.sort()
console.log(frutas);

// REVERSE = inverter o array
frutas.reverse()
console.log(frutas);

// CONVERTENDO O ARRAY
console.log(frutas.toString());

// JOIN = junta o arry, e troca o separador dela
console.log(frutas.join(" "));


//SLICE = copia
// (em qual indice começa, quantos elementos serão copiados)
var parteCopiada = frutas.slice(2,4)
console.log("Cópia: ", parteCopiada);

//SPLICE
//pra remover
var removidos = frutas.splice(1,2)
console.log("Removidos: ", removidos);


//pra adcionar
frutas.splice( 2, 0, "Coca-Cola", "Laranja", "Caju")
console.log(frutas);

//adicionar com substituição
frutas.splice(1,3, "Computador", "Mouse")
console.log(frutas);





