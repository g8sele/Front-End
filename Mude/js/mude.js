'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')

    var ClassName = document.body.ClassName;
    if(ClassName == "black-theme") {
        this.textContent = "MUDE";
    }
    else{
        this.textContent = "MUDE";
    }
});