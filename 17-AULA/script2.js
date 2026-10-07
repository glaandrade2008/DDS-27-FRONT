// DESVIOS CONDICIONAIS

// IF = SE

var estaVivo = true

//Primeira comparação
if(!estaVivo){
    console.log("Parabéns, que legal")
}

// Seguna comparação. Só vem pra cá, se a primeira der errado
else if(estaVivo == undefined){
    console.log("Mano, sei como ce tá.");
}

//Último caso, só entra aqui se todos acima derem errado
else{
    console.log("Morreu, mas passa bem");
    
}

//SWITCH CASE
var camisa = "Marrom"

switch(camisa){
    case "Preta":
        console.log("PARABÉNS, CABA DE GANHAR VINIL DA SABRINA CARPENTER");
    break
    case "Branca":
        console.log("Vpce ganhou, um body splash da VIrginia");
    break
    case "Vermelha":
        console.log("Voce ganhou uma ferrari, 3 portas, com teto solar e escada");
    break
    default:
        console.log("Puxa, não foi dessa vez que voce conseguiu");
    break
        
}

//PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
var preferido = prompt("QUAL É O SEU PET FAVORITO DO MUNDO DOS FILMES.")

console.log("Seu PET preferido é: ", preferido);

console.log("Coloque apenas valores acima de 1, e menor do que 1000");


var caixa1 = Number(prompt("valor da caixa 1:"))
var caixa2 = Number(prompt("valor da caixa 2:"))
var caixa3 = Number(prompt("valor da caixa 3:"))

// 1 VIAGEM
if(caixa1 < caixa2 && caixa2 < caixa3)  (caixa1 + caixa2 < caixa3){
    console.log("1 viagem necessária");

}
else if((caixa1 < caixa2 && caixa2 == caixa3)||(caixa1 == caixa2 && caixa2 < caixa3)){
    console.log("2 viagens necessárias");
}
else{
    console.log("3 viagens necessárias");
    
}
