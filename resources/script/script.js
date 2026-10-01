//variáveis
//tipos de variáveis
//comando de saída de dados
console.log("Hello world!");
alert("Olá mundo");
//type() : função para saber o tipo de dado.
//artimétria: soma, divisão, subtração, multiplicação.

//comando de entrada de dados
//string, number, boolean

//comando de entrada de dados
//let nome = prompt("Digite o seu nome");
//alert("Seu nome é " + nome);

//atiidade
//let nome = prompt("Informe seu primeiro nome:");
//let sobrenome = prompt("Informe seu sobrenome:");
//alert("O seu nome completo é: " + nome + " " + sobrenome);

//let num1 =Number( prompt("Digite um número:"));
//let num2 =Number( prompt("Digite outro número:"));
//let resultado = num1 + num2

//atividade 02
let nota1 =Number( prompt("Digite a primeira nota:"));
let nota2 =Number( prompt("Digite a segunda nota:"));
let nota3 =Number( prompt("Digite a terceira nota:"));
let nota4 =Number( prompt("Digite a quarta nota:"));
let resultado = (nota1 + nota2 + nota3 + nota4)/4;
alert("A média final é: " + resultado);
if(resultado >=7 ){
    alert("Aprovado");
}
else{
    alert("Reprovado");
}

let idade = 21

if(idade >= 18){
    alert("Você é maior de idade");
}
else{
    alert("Você é menor de idade")
}