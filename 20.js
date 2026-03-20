//Criar um programa para ele exibir: se a nota for maior que 9 "excelente. se a nota for estiver entre 8 e 7 "ótimo". se a nota estiver entre 6 e 5 "bom" se a nota tiver entre 4 e 2 "Regular". Se a nota for menor que 1 "Ruim"
let nota = 6;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota <= 8 && nota >= 7) {
    console.log("Ótimo");
} else if (nota <= 6 && nota >= 5) {
    console.log("Bom");
} else {
    console.log("Ruim");
}