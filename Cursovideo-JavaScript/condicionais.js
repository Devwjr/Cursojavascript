// Estrutura if
// Verifica se a idade é maior ou igual a 18. Se for, exibe uma mensagem.
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade."); // Será exibido pois a idade é 18
}

// Estrutura if...else
// Verifica se a idade é maior ou igual a 18, caso contrário, exibe uma mensagem para menores de idade.
idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade."); // Será exibido pois a idade é 16
}

// Estrutura if...else if...else
// Aqui, definimos faixas de notas para mostrar diferentes mensagens.
let nota = 85;

if (nota >= 90) {
  console.log("Excelente!"); // Exibe "Excelente!" para notas 90 ou mais
} else if (nota >= 75) {
  console.log("Muito bom!"); // Exibe "Muito bom!" para notas entre 75 e 89
} else {
  console.log("Precisa melhorar."); // Exibe "Precisa melhorar." para notas abaixo de 75
}

// Estrutura switch
// O switch testa o valor da variável `dia` e executa o caso correspondente.
let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break; // Para o switch após o caso correto ser encontrado
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break; // "Terça-feira" será exibido porque `dia` é 3
  case 4:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia não encontrado"); // Executado se nenhum caso for correspondente
    break;
}