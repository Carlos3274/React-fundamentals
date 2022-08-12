// Rest -> Resto

function empresa(dono, ...funcionarios) {
  console.log(dono, funcionarios)
}

empresa('Matheus', 'Joao', 'Marcos', 'Gabriel') // dono = Matheus / funcionarios = ['Joao', 'Marcos', 'Gabriel']

// Spred -> Espalhar

const numeros = [2, 4, 7, 8, 11]
console.log(Math.max(numeros)) // NaN
console.log(Math.max(...numeros)) // 11

// Spread para transformar Nodelist/HTMLCollection em array
const lis = document.querySelectorAll('li')
console.log(lis)
const arrayLis = [...lis]
console.log(arrayLis)

// Clonar objetos com spread (espalha as propriedades)
const carro = {cor: 'Azul', ano: 2000}
const cloneCarro = {...carro}
// adicionando novas propriedades
const cloneCarroComMarca = {...carro, marca: Honda}



