document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

document.getElementById("back_menu").addEventListener("click", ocultar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back_menu");

function mostrar_menu(){

    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function ocultar_menu(){

    nav.style.right = "-250px";
    background_menu.style.display = "none";
}


/////////







  //Variable global para guardar el intervalo
  var animInterval;

  function startAnim() {

    let obj = document.getElementById('contador');
    animInterval = setInterval(animNumValue, 5000, obj, 3150);
  }

  function animNumValue(num, newValue) {

    valor = num.innerHTML;
    intValue = parseInt(valor);

    if (intValue >= newValue) { //Si el valor ha superado el objetivo paro
      clearInterval(animInterval);
    } else { //Si el valor no ha superado el objetivo lo aumento
      valor++;
      num.innerHTML = valor;
    }
  }
  startAnim();