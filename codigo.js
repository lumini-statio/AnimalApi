const URL_CAT = 'https://api.thecatapi.com/v1/images/search'
const URL_DOG = 'https://api.thedogapi.com/v1/images/search'

let btn1 = document.querySelector('.cambiar');
let btn2 = document.querySelector('.cambiar2')

btn1.addEventListener('click',cambiarGato);

btn2.addEventListener('click',cambiarPerro);

function cambiarGato() {
    
    fetch(URL_CAT)
    .then(res => res.json())
    .then(data => {

        const img = document.querySelector('.gatito');
        img.src = data[0].url;
    })

}

function cambiarPerro() {
    
    fetch(URL_DOG)
    .then(res => res.json())
    .then(data => {

        const img = document.querySelector('.perrito');
        img.src = data[0].url;
    })

}
