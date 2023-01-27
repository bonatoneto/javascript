function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var mensagem = document.getElementById('mensagem')
    var mensagem2 = document.getElementById('mensagem2')

    if ((nasc.value == 0) || Number(nasc.value > ano)) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        mensagem.innerHTML = `Voce nasceu em ${nasc.value}`
        mensagem2.innerHTML = `E tem ${idade} anos!`
    }

}