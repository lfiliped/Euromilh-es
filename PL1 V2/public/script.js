document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("genBtn");
    botao.addEventListener("click", consomeChave);
});

function consomeChave() {
    fetch("http://localhost:3000/euro")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            afixachave(data);
        })
        .catch(err => console.error('Error:', err));
}

function afixachave(mychave) {
    let listanumeros = document.getElementById("olMain");
    listanumeros.innerHTML = "";
    mychave.numeros.forEach(numero => {
        let newli = document.createElement('li');
        newli.innerHTML = numero;
        listanumeros.appendChild(newli);
    });

    let listaestrelas = document.getElementById("olStars");
    listaestrelas.innerHTML = "";
    mychave.estrelas.forEach(estrela => {
        let newli = document.createElement('li');
        newli.innerHTML = estrela;
        listaestrelas.appendChild(newli);
    });
}
