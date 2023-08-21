function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imgHorario')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    if (hora >= 6 && hora < 12){
        img.src = "/Projetos/HORARIO/img/ManhaCANVA.jpg"
        msg.innerHTML = `O HORARIO É: ${hora}:${min}<br><strong>Bom Dia</strong>`
        document.body.style.background = '#a143f9'

    }

    else if(hora >= 12 && hora <18){
        img.src = "/Projetos/HORARIO/img/TardeCANVA.jpg"
        msg.innerHTML = `O HORARIO É: ${hora}:${min}<br><strong>Boa Tarde</strong>`
        document.body.style.background = 'green'


    }

    else{
        img.src = "/Projetos/HORARIO/img/NoiteCANVA.jpg"
        msg.innerHTML = `O HORARIO É: ${hora}:${min}<br><strong>Boa Noite</strong>`
        document.body.style.background = 'black'
    }
}