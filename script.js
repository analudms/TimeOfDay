function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src= "./assets/manha.png"
        document.body.style.background = '#4682B4'
    }else if(hora >= 12 && hora < 18){
        img.src = "./assets/tarde.png"
        document.body.style.background = '#CD853F'
    }else{
        img.src = "./assets/noite.png"
        document.body.style.background = '#2F4F4F'
    }
}