//Sprachen, die von rechts nach links gelesen werden und damit das Menü auf der rechten Seite anzeigen.
const righToLeftLanguages = [
  "ar",
  "he",
  "fa",
  "ur",
  "ks",
  "ps",
  "ug",
  "ku",
  "pa",
  "sd",
];

//Funktion, die entscheidet, ob das Menü links oder rechts angezeigt wird.
function menuVisibility() {
  //For-Each-Loop durch das Array
  righToLeftLanguages.forEach(leftOrRight);
  function leftOrRight(language) {
    if (navigator.language.includes(language)) {
      visibleRight();
    } else {
      visibleLeft();
    }
  }
}

function visibleLeft() {
  const leftMenu = document.getElementById("visible-left");
  const rightMenu = document.getElementById("visible-right");

  {
    rightMenu.style.visibility = "hidden";
    rightMenu.style.maxWidth = "0%";
    leftMenu.style.visibility = "visible";
    leftMenu.style.maxWidth = "100%";
    return;
  }
}

function visibleRight() {
  const leftMenu = document.getElementById("visible-left");
  const rightMenu = document.getElementById("visible-right");

  {
    leftMenu.style.visibility = "hidden";
    leftMenu.style.maxWidth = "0%";
    rightMenu.style.visibility = "visible";
    rightMenu.style.maxWidth = "100%";
    return;
  }
}
