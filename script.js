function result() {
    let numi = document.getElementById('numi')
    let numf = document.getElementById('numf')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (numi.value.length === 0 || numf.value.length === 0 || passo.value.length === 0) {
    window.alert('[ERRO] Preencha todos os campos e tente novamente.')
    res.innerHTML = ''
    } else {
        let i = Number(numi.value)
        let f = Number(numf.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'

        if (p <= 0) {
            window.alert('Passo inválido!')
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` //pega o emoji no site do unicode.emojis - troca o U+ do início por \u"
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += 'FIM! \u{1F389}'
    }
}

