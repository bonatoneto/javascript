
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var msg2 = document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if ((hora => 5) && (hora < 12)) {
        img.src = 'imagens/dia.png'
        document.body.style.background = '#70a8c3'
        msg2.innerHTML = 'Bom dia!'
    } else if ((hora > 12) && (hora <= 18)) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f5bb6a'
        msg2.innerHTML = 'Boa tarde!'
    } else if ((hora > 18) && (hora < 24)) {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#041020'
        msg2.innerHTML = 'Boa noite!'
    }
}