// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'

let turno = "Dia"
if(turno === "Dia"){
    console.log("Claro")
}else{
    console.log("Noite")
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for(let i = 0; i <= 20; i+=2)
console.log(i)

// 03 - crie uma função que exiba uma mensagem no console

function exibirMensagemNoConsole(nome){
    console.log(`Olá sou o ${nome}`)
}
exibirMensagemNoConsole("João Pedro")

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function mensagem(nome){
    console.log(`Olá ${nome}, sua compra foi negada, devido não ter limite suficiente em seu cartão de crédito!`);
}
mensagem("João Pedro")

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function nomeIdadeEstiloMusical(nome, idade, estiloMusical){
    console.log(`Meu nome é ${nome} tenho ${idade} anos e gosto de ouvir ${estiloMusical}`)
}
nomeIdadeEstiloMusical("João Pedro", 26, "Sertanejo")

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function filmeMusica(filme, musica) {
console.log(`Filme favorito é ${filme} e minha musica favorita é ${musica}`)
}
filmeMusica("Avatar", "O Destino - Lucas Lucco")
   

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função



function triploNumero(num){
return console.log(3 * num)
}
triploNumero(5)


// 08 - crie uma função que  verifique se uma  variável é true ou false


function verificarVariavel(){
    let verificar = true 
    if(verificar == true){
        console.log("essa variavel é true")
    }else{
        console.log("essa variavel é false")
    }
}
verificarVariavel()



// 09 - Crie um array que receba 5 itens e exiba no console.

let itens =["cebola", "abacate", "guaraná", "bisteca", "suco"]
console.log(itens)



// 10 - Utilize um método para adicionar um nome ao inicio do array.

let adicionarItensNoInicio =["cebola", "abacate", "guaraná", "bisteca", "suco"]
console.log(adicionarItensNoInicio)
adicionarItensNoInicio.unshift("Café")


// 11 - Utilize um método para remover o último nome do array.
let removerUltimoItem =["cebola", "abacate", "guaraná", "bisteca", "suco"]
console.log(removerUltimoItem)
removerUltimoItem.pop()


// 12 - Utilize um método para adicionar dois nomes ao fim do array.

let adicionarDoisItensAoFim =["cebola", "abacate", "guaraná", "bisteca", "suco"]
console.log(adicionarDoisItensAoFim)
adicionarDoisItensAoFim.push("Arroz", "Feijão")


// 13 - Utilize um método para remover o primeiro nome do array.

let removerPrimeiroItem =["cebola", "abacate", "guaraná", "bisteca", "suco"]
console.log(removerPrimeiroItem)
removerPrimeiroItem.shift()


// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4]
console.log(numbers)
numbers.sort()



// 15 - Crie um objeto que receba ao menos três propriedades sobre você.

let objeto = {
    nome: "João Pedro",
    idade: 26,
    gostoMusical: "Piseiro", 
}
console.log(objeto)


// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
// objeto.profissao = "Front-end" => outra forma de inserir objeto
objeto["gostoFilmes"] = "Ação"

// 17 - Remova uma propriedade desse objeto.
 delete objeto.gostoFilmes


// 18 - Mostre no console todas as propriedades desse objeto.
console.log(objeto.nome)
console.log(objeto.idade)
console.log(objeto.gostoMusical)
console.log(objeto.gostoFilmes)

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.

let cadastro = [
    {
        nome: "Bruno",
        idade: 19,
        telefone: "(21) 9 9999-9999",
        amigos: ["Andre", "Pedro", "Ricardo", "felipe"]
    },
    {
        nome: "Dionatan",
        idade: 17,
        telefone: "(21) 9 8888-8888",
        amigos: ["Renato", "Lucas", "José", "Enzo"]
    },
    {
        nome: "Robério",
        idade: 13,
        telefone: "(21) 9 7777-7777",
        amigos: ["Anderson", "Marco", "Fernando", "Igor"]
    },
    {
        nome: "Airon",
        idade: 28,
        telefone: "(21) 9 6666-6666",
        amigos: ["Matheus", "Guilherme", "Gabriel", "Nathalia"]
    },
    {
        nome: "Messi",
        idade: 30,
        telefone: "(21) 9 5555-5555",
        amigos: ["Evelyn", "Terezinha", "Leonardo", "Pablo"]
    }
]
console.log(cadastro)

// 20 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[3])

// console.log(`Um dos amigos de ${cadastro[0].nome} é o ${cadastro[0].amigos[0]}`) forma template string para chamar o amigo 











