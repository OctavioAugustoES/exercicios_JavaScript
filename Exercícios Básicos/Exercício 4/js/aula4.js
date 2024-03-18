const num = Number (prompt ('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const divTexto = document.getElementById('texto');

numeroTitulo.innerHTML = num;
divTexto.innerHTML += `<p>Raiz quadrada: ${num ** 0.5}.</p>`;
divTexto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}.</p>`;
divTexto.innerHTML += `<p>${num} é NaN?: ${Number.isNaN(num)}.</p>`;
divTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}.</p>`;
divTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}.</p>`;
divTexto.innerHTML += `<p>Com duas casa decimais: ${num.toFixed(2)}.</p>`;




