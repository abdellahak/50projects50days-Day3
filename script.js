let main = document.getElementById('main');
let circle = document.getElementById('circle');
let list = document.getElementById('list');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');

function rotate(){
    main.classList.add('rotate');
    circle.style.transform = ('translate(-50%,-50%) rotate(-90deg)')
    list.style.transform = ('translateX(10%)')
    item2.style.marginLeft = '30px';
    item3.style.marginLeft = '60px';
}



function back(){
    main.classList.remove('rotate');
    circle.style.transform = ('translate(-50%,-50%)');
    list.style.transform = ('translateX(-200%)');
    item2.style.marginLeft = '0px';
    item3.style.marginLeft = '0px';
}