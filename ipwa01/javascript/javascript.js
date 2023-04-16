let left = "de-DE";

function visibleLeft() {
  if (navigator.language.valueOf(left)) {
    let leftMenu = document.getElementById("visible-left");
    let rightMenu = document.getElementById("visible-right");
    rightMenu.style.visibility = "hidden";
    rightMenu.style.maxWidth = "0%";
    leftMenu.style.visibility = "visible";
    leftMenu.style.maxWidth = "100%";
  }
}

function visibleRight() {
  let leftMenu = document.getElementById("visible-left");
  let rightMenu = document.getElementById("visible-right");
  if (navigator.language != left) {
    leftMenu.style.visibility = "hidden";
    leftMenu.style.maxWidth = "0%";
    rightMenu.style.visibility = "visible";
    rightMenu.style.maxWidth = "100%";
  }
}
