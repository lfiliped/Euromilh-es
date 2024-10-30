document.addEventListener("DOMContentLoaded", (event) => {
    botao = document.getElementById("genBtn");
    botao.addEventListener("click", geraChave);
let displayBtn = document.getElementById("displayBtn");
    displayBtn.addEventListener("click", () => {
        let jsonInput = prompt("Insira a chave em formato JSON:");
        try {
            let chaveObj = JSON.parse(jsonInput);
            mostrarChave(chaveObj);
        } catch (e) {
            alert("JSON inválido!");
        }
    });
});
function gerador(num, min, max) {
    resultado = new Set();
    while (resultado.size < num) {
        novo = Math.floor(Math.random() * (max - min + 1) + min);
        resultado.add(novo);
    }
    return [...resultado].sort((a, b) => a - b);
}
function geraJSON() {
    let numeros = gerador(5, 1, 50);
    let estrelas = gerador(2, 1, 12);
let chave = {
        numeros: numeros,
        estrelas: estrelas
    };
chaveJSON = JSON.stringify(chave);
    console.log(chaveJSON);
}
function geraChave() {
    let numeros = gerador(5, 1, 50);
    let estrelas = gerador(2, 1, 12);
let listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    for (i = 0; i < 5; i++) {
        let newli = document.createElement('li');
        newli.innerHTML = numeros[i];
        listanumeros.appendChild(newli);
    }
let listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    estrelas.forEach((estrela) => {
        let newli = document.createElement('li');
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    });
geraJSON();
}
function mostrarChave(chave) {
    let listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    chave.numeros.forEach((numero) => {
        let newli = document.createElement('li');
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    });
let listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    chave.estrelas.forEach((estrela) => {
        let newli = document.createElement('li');
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    });
}