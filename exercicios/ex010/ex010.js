var agora = new Date()
var hora = agora.getHours()
if ((hora > 18) && (hora < 24)) {
    console.log(`São ${hora} horas, boa noite!`)
} else if (hora < 5) {
    console.log(`São ${hora} horas, boa madrugada!`)
} else if ((hora >= 5) && (hora < 12)) {
    console.log(`São ${hora} horas, bom dia!`)
} else if ((hora >= 12) && (hora <= 18)) {
    console.log(`São ${hora} horas, boa tarde!`)
} else {
    console.log('Hora incorreta!')
}
