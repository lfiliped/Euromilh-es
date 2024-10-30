document.addEventListener("DOMContentLoaded", (event) => {
    const botao = document.getElementById("genBtn");
    botao.addEventListener("click", geraChave);
});

// gera array de num numeros entre min e max sem repeticoes
function gerador(num, min, max) {
    const resultado = new Set();
    while (resultado.size < num) {
        const novo = Math.floor(Math.random() * (max - min + 1) + min);
        resultado.add(novo);
    }
    return [...resultado].sort((a, b) => a - b);
}

function geraChave() {
    const numeros = gerador(5, 1, 50);
    const estrelas = gerador(2, 1, 12);

    const listanumeros = document.getElementById("ulMain");
    listanumeros.innerHTML = "";
    numeros.forEach((numero) => {
        const newli = document.createElement('li');
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    });

    const listaestrelas = document.getElementById("ulStars");
    listaestrelas.innerHTML = "";
    estrelas.forEach((estrela) => {
        const newli = document.createElement('li');
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    });
}
