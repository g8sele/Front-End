const clock = setInterval(() => {

    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let s = new Date().getSeconds();

    let date = new Date().getDate();
    let mes = new Date().getMonth() + 1;
    let ano = new Date().getFullYear();



    if (hr < 10) {
        hr = '0' + hr
    }

    if (min < 10) {
        min = '0' + min
    }

    if (s < 10) {
        s = '0' + s
    }
    
    if (date < 10) {
        date = '0' + date
    }

    if (mes < 10) {
        mes = '0' + mes
    }

    if (ano < 10) {
        ano = '0' + ano
    }

    //horas

    if (hr < 12 && hr > 5) {
        
        document.getElementById('mensagem').textContent = "Bom dia!"
        document.querySelector('body').setAttribute('class', 'manha')
        
    } else if(hr < 18 &&  hr >= 12) {
        
        document.getElementById('mensagem').textContent = "Boa tarde!"
        document.querySelector('body').setAttribute('class', 'tarde')
        
    } else{

        document.getElementById('mensagem').textContent = "Boa noite!"
        document.querySelector('body').setAttribute('class', 'noite')
        
    }

    //datas

    document.querySelector('#Dia').textContent = date;
    document.querySelector('#Mes').textContent = mes;
    document.querySelector('#Ano').textContent = ano

    // horas 

    document.getElementById('Horas').textContent = hr
    document.getElementById('Minutos').textContent = min
    document.getElementById('Segundos').textContent = s
})
