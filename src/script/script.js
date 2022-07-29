var btn1 = document.getElementById('btn-um');
var btn2 = document.getElementById('btn-dois');
var btn3 = document.getElementById('btn-tres');


var container = document.querySelector('.containerUm');
var containerDois = document.querySelector('.containerDois');
var containerTres = document.querySelector('.containerTres');


btn1.addEventListener("click", function(){
    if(container.style.display === 'block') {
        container.style.display =  'none';
    } else {
        container.style.display = 'block';
        containerDois.style.display = 'none'
        containerTres.style.display = 'none'
    }
} )

btn2.addEventListener("click", function(){

    if(containerDois.style.display === 'block') {
        containerDois.style.display =  'none';
    } else {
        containerDois.style.display = 'block';
        container.style.display = 'none'
        containerTres.style.display = 'none'
    }
} )

btn3.addEventListener("click", function(){

    if(containerTres.style.display === 'block') {
        containerTres.style.display =  'none';
    } else {
        containerTres.style.display = 'block';
        containerDois.style.display = 'none'
        container.style.display = 'none'
    }
} )
