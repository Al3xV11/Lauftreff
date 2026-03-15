function toggleMenu(){

  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const hamburger = document.querySelector(".hamburger");

  menu.classList.toggle("open");
  overlay.classList.toggle("open");
  hamburger.classList.toggle("open");

}

/* Klick außerhalb schließt Menü */

document.addEventListener("click",(e)=>{

  const menu = document.getElementById("menu");
  const overlay = document.getElementById("overlay");
  const hamburger = document.querySelector(".hamburger");

  if(
    menu.classList.contains("open") &&
    !menu.contains(e.target) &&
    !hamburger.contains(e.target)
  ){
    menu.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.classList.remove("open");
  }

});
