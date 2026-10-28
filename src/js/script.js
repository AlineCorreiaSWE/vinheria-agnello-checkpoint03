
const vinhos = [
    {
        nome: "Vinho Tinto",
        tipo: "tinto",
        safra: 2022,
        estoque: 10
    },
    {
        nome: "Vinho Branco",
        tipo: "branco",
        safra: 2023,
        estoque: 3
    },
    {
        nome: "Vinho Rose",
        tipo: "rose",
        safra: 2021,
        estoque: 4
    }
];

function adicionarVinho(nome, tipo, safra, estoque) {
    vinhos.push({
        nome: nome,
        tipo: tipo,
        safra: safra,
        estoque: estoque
    });
}

console.log("Lista de vinhos:");

vinhos.forEach(function(vinho) {
    console.log(vinho.nome, vinho.tipo, vinho.safra, vinho.estoque);
});

const estoqueBaixo = vinhos.filter(function(vinho) {
    return vinho.estoque < 5;
},);

const total = vinhos.reduce(function(soma, vinho) {
    return soma + vinho.estoque;
}, 0);

console.log("Estoque total:", total);

const nomes = vinhos.map(function(vinho) {
    return vinho.nome.toUpperCase();
});

console.log("Nomes dos vinhos em maiúsculas:");
console.log(nomes);

adicionarVinho("Vinho Malbec", "tinto", 2023, 8);

console.log("Lista atualizada:");
vinhos.forEach(function(vinho) {
    console.log(vinho.nome);
});

alert("Estoque total: " + total + "garrafas");

const listaVinhos = document.getElementById("lista-vinhos");

vinhos.forEach((vinho) => {
    listaVinhos.innerHTML += `
      <div class=card>
        <h2>${vinho.nome}</h2>
        <p><strong>Preço:<strong> ${vinho.tipo}</p>
        <p><strong>Categoria:<strong> ${vinho.safra}</p>
        <p><strong>Categoria:<strong> ${vinho.estoque}</p>
        <hr>
    </div>
    `;
 
});