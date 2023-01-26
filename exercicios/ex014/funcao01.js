function parimpar(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

var num = parimpar(3)
console.log(num)