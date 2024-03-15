const nome = 'Octávio Augusto';
const sobrenome = 'Siqueira da Silva';
const idade = 18;
const peso = 60;
const alturaEmM = 1.69;

let indiceMassaCorporal; 
indiceMassaCorporal = peso/ (alturaEmM * alturaEmM); 

let anoNascimento = 2024 - idade;
anoNascimento = anoNascimento - 1 ;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`Seu índice de massa corporal é: ${indiceMassaCorporal}`);
console.log(`Seu ano de nascimento é: ${anoNascimento}`);
