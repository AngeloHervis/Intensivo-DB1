[1, 2, 3, 4].filter(function (value) {
    console.log(value)
})

const numeros = [1,2,3,4,5,6]

const pessoa = {
    name: "Angelo",
    job: "Programador",
    age: 18
}

console.log(pessoa.name)

const key = "teste"
console.log(pesso[key])

console.log(pessoa) // Mostra todo o objeto
console.log(Object.keys(pessoa))// Mostra todas as chaves
console.log(Object.values(pessoa))// Mostra todos os valores
console.log(Object.entries(pessoa))// mostra a chave e o valor

console.log("name" in pessoa)// checa se a chave existe

// const carro = {
//     modelo: "Lindo",
//     year: 2024,
//     fabricante: {
//         name: "X",
//         mecanicos: {
//             name: "Pedro",
//             especialidade: "Motor"
//         }
//     }

// }

//Exercício

const Pessoa = {
    nome: "Angelo",
    idade: 18,
    profissao: "Designer Gráfico",
}

console.log(pessoa)