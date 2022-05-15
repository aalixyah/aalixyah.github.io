//displays img div on hover
const hoverTarget = document.getElementsByClassName('project-list-item');

function changeImage(src){
    document.getElementById('img-mainpage').src = src;
    
    document.getElementById('img-mainpage').style.visibility = 'visible';
}

// hides image div

function hideImg (){
    document.getElementById('img-mainpage').style.visibility = 'hidden';
}

//Unica One for info Potta One for logo
//font-family: 'Londrina Sketch', cursive; mobile

