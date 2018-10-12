// j'appelle ma fonction bordure de l'événement onmouseover que j'applique pour afficher ma bordure.
function bordure(){
  document.getElementById('image1').style.border = "3px solid red";
}
// j'appelle ma fonction pasDeBordure de l'événement onmouseout que j'applique pour cacher ma bordure.

function pasDeBordure(){
document.getElementById('image1').style.border = null;
}
