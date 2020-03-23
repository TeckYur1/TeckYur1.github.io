function ativaMenu(){
    let menuCelular = document.querySelector(".navCelular ul")
    if(menuCelular.style.display == "none"){
        menuCelular.style.display = "block"
    }else{
        menuCelular.style.display = "none"
    }
}
var elmns = document.querySelectorAll(".olink");
for (var i = 0; i < elmns.length; i++) {
  elmns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("ativado");
  current[0].className = current[0].className.replace(" ativado", "");
  this.className += " ativado";
  });
}