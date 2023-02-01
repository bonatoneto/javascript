function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var mensagem = document.getElementById('mensagem')

    if (nasc.value.length == 0 || Number(nasc.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0]. checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade > 12 && idade < 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade > 20 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (sex[1]. checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade > 12 && idade < 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade > 20 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
    }   mensagem.innerHTML = `Detectamos ${genero} de ${idade} anos de idade.`
        mensagem.appendChild(img)

}