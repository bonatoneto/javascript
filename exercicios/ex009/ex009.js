var idade = 15 
if (idade > 18) {
    console.log(`Você tem ${idade} anos e o seu voto é obrigatório`)
} else if ((idade < 18) && (idade >= 16)) {
    console.log(`Você tem ${idade} anos e o seu voto não é obrigatório`)
} else {
    console.log(`Você tem ${idade} anos e não pode votar`)
}