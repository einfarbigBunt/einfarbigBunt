let ich =document.getElementById('ich-button');
let ichKlasse = document.getElementsByClassName('ich') // funktioniert nicht
let info = document.getElementById('ich-info');
let danke = document.getElementById('danke-button');


let open = function(){
    info.style.display= 'flex';
    
    
}
let close = function (){
info.style.display= 'none';
}

let textChange= function (){
    ich.innerHTML= '        ';
    ich.style.width= '70px';
}

let textReturn = function(){
    ich.innerHTML = 'Über mich';
    ich.style.backgroundColor='';
}
ich.onclick= open;
danke.onclick= close;

ich.addEventListener('click', textChange);
danke.addEventListener('click', textReturn);



// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below
let colorChange = function (event) {
   let randomColor = 'rgb(' +rgb(255)
+ ',' + rgb(255) + ','+ rgb(255) + ')'  ;
event.target.style.backgroundColor = randomColor;

  
}

ich.onmouseover=colorChange;
ichKlasse.onmouseover=colorChange;