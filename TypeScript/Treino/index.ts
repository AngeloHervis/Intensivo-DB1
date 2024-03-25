// Ex 01: Escreva uma função em TypeScript chamada adicionar que recebe dois parâmetros do tipo number e retorna a soma desses números. Certifique-se de definir os tipos de parâmetros e de retorno explicitamente.
function adicionar(a: number, b: number): number{
    return a+b;
}

//Ex02: Crie uma interface chamada Usuario com as propriedades nome (string) e idade (number). Em seguida, escreva uma função chamada cumprimentarUsuario que aceita um parâmetro do tipo Usuario e retorna uma saudação personalizada usando as propriedades desse objeto.

//Definindo a Interface Usuario
interface Usuario {
    nome: string;
    idade: number;
}

//Função para cumprimentar o usuário
function cumprimentarUsuario(usuario: Usuario): string {
    return `Olá, ${usuario.nome}, você tem {usuario.idade} anos de idade.`;
}

const usuario: Usuario = {nome: "Ângelo", idade: 18};
console.log(cumprimentarUsuario(usuario));

//Ex03: Crie uma classe chamada Animal com as propriedades nome e tipo. Em seguida, crie uma subclasse chamada Cachorro que herda da classe Animal e adiciona uma propriedade raca. Crie um método na classe Cachorro chamado latir que imprime "Au Au!" no console.

//Definindo a classe Animal
class Animal {
    nome: string;
    tipo: string;

    constructor(nome: string, tipo: string) {
        this.nome = nome;
        this.tipo = tipo;
    }
}

//Definindo a SubClasse "Cachorro" que herda de "Animal"
class Cachorro extends Animal {
    raca: string;

    constructor(nome: string, tipo: string, raca: string) {
        super(nome, tipo);
        this.raca = raca;
    }

    latir(): void {
        console.log("Au Au!")
    }

}

// Exemplo de uso das classes
const meuCachorro = new Cachorro("Bolinha", "Cachorro", "Labrador");
console.log(`Nome: ${meuCachorro.nome}, Tipo: ${meuCachorro.tipo}, Raça: ${meuCachorro.raca}`);
meuCachorro.latir();


//Ex04: Declare um enum chamado DiaDaSemana com os valores representando os dias da semana (por exemplo, Segunda, Terça, etc.). Escreva uma função chamada obterDiaUtil que recebe um parâmetro do tipo DiaDaSemana e retorna true se for um dia útil (Segunda a Sexta) e false caso contrário.


//Ex05: Escreva uma função genérica chamada trocarElementos que aceita um array e dois índices como parâmetros e troca os elementos nos índices fornecidos. Certifique-se de definir o tipo genérico corretamente.


//Ex06: Crie dois arquivos TypeScript diferentes: um chamado calculos.ts e outro chamado index.ts. No arquivo calculos.ts, declare e exporte uma função chamada calcularMedia que calcula a média de um array de números. No arquivo index.ts, importe a função calcularMedia e teste sua funcionalidade.