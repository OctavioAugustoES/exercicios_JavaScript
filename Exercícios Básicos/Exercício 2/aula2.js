/* Transformar as variáveis String

A
B
C

to

B
C
A

*/


let varA = `A`; //B
let varB = `B`; //C
let varC = `C`; //A

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);




