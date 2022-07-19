let nome 
let idade 

console.log(typeof nome) // O tipo "undefined" foi impresso, pois a variável foi declarada sem valor algum.
console.log(typeof idade) // O tipo "undefined" foi impresso, pois a variável foi declarada sem valor algum.

nome = prompt("Qual o seu nome?") 
idade = Number(prompt("Qual a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)
/* Com a nova atribuição nome passou a ser do tipo "string", 
e a variável idade com o identificador "Number" passou a ser do tipo número.*/

console.log("Olá", nome, "você tem", idade, "anos.")