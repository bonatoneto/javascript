let num = [8, 5, 6, 9]
num[4] = 5

//num.push(4) -> Joga o elemento para a ultima posição do array
//num.sort()  -> Joga todos os valores do array em order crescente 
//num.length  -> Informa o tamanho do array 

console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O vetor de posição 2 vale ${num[1]}`)
// informa o valor de um elemento baseado pela sua posição
console.log(`O array em transformado em order crescente ${num.sort()}`)
console.log(num.sort())
console.log('Adicionando um elemento no final do array')
num.push(7)
console.log(num)

/*
console.log('informando os valores de cada posição do array')
for (let i = 0; i < num.length; i++) {
    console.log(`O vetor de posição ${i} vale: ${num[i]}`)
}
*/

for (let i in num) {
    console.log(`O vetor de posição ${i} vale: ${num[i]}`)
}
//versão simplificada para percorrer um array

console.log('O valor 6 esta na posição', num.indexOf(6))
// informa a posição de um elemento baseado pelo o seu valor