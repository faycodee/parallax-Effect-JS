let star = document.getElementById("star");
let tir = document.getElementById("tir");
let tir2 = document.getElementById("tir2");
let moon = document.getElementById("moon");
let jbl1 = document.getElementById("jbl1");
let jbl2 = document.getElementById("jbl2");
let wad = document.getElementById("wad");
let bato = document.getElementById("bato");
let jbl3 = document.getElementById("jbl3");
let body = document.querySelector("body");
let H2 = document.querySelector(" div H2");


window.onscroll = function () {
  let valeur = scrollY;
  console.log(valeur);

  star.style.right = valeur + "px";
  star.style.bottom = valeur + "px";
  tir.style.left = valeur * 3 + "px";
  tir.style.top = valeur / 10 + "px";
  tir2.style.left = valeur * 3 + "px";
  tir2.style.top = valeur * 3 + "px";

  if (scrollY >= 85) {
    tir2.style.top = 85 * 3 + "px";
    if (scrollY >= 131.25) {
      tir2.style.rotate = valeur / 10 + "deg";
      tir2.style.bottom = valeur * 4 + "px";
    } else {
      tir2.style.rotate = 0 + "deg";
    }
  } else {
    tir2.style.left = valeur * 3 + "px";
    tir2.style.top = valeur * 3 + "px";
  }
  moon.style.top = valeur * 3.5 + "px";
  jbl1.style.top = valeur / 2 + "px";
  jbl2.style.top = valeur / 4 + "px";
  wad.style.top = valeur / 4 + "px";
  bato.style.top = valeur / 4 + "px";
  bato.style.right = valeur * 4 + "px";
  if (valeur >= 225) {
   body.style.background='linear-gradient(var(--BcolorF), var(--Bcolor))'
   
  jbl1.style.top = 110+ "px";
  jbl1.style.filter = ' hue-rotate(180deg);';
  jbl2.style.top = 70+ "px";
  wad.style.top = 50 + "px";
  
  } else {
    body.style.background='linear-gradient(var(--BcolorD), var(--Bcolor))'
  
  }
  H2.style.transform= 'scale('+valeur/55+')';
  if(valeur>=166.9642791748047){
     H2.style.transform= 'scale('+166.9642791748047/55+')';
     if (valeur>=449.1071472167969) {
      H2.style.display='none'
     }
     else{
       H2.style.display='block'
     }
  }
  else{
    H2.style.transform= 'scale('+valeur/55+')';
  }
  scrollX="none"
};
