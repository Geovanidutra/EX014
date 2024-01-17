function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manhagip.png'
        document.body.style.background = "#fdf3a8"
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
    }

    else if (hora >= 12 && hora < 18) {
        img.src = 'tardegip.png'
        document.body.style.background = "#bca78c"
        msg.innerHTML = `Agora são ${hora} horas.  Boa tarde!`
    }
    else {
        img.src = 'noitegip.png'
        document.body.style.background = "#6a5d51"
        msg.innerHTML = `Agora são ${hora} horas.  Boa noite!`
    }

}