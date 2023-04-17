let left = "de-DE";

function menuVisibility() {
  if (navigator.language.valueOf(left)) {
    visibleLeft();
  } else {
    visibleRight();
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
    return
  }
}

function visibleRight() {
  const leftMenu = document.getElementById("visible-left");
  const rightMenu = document.getElementById("visible-right");
  
  if (navigator.language != left) {
    leftMenu.style.visibility = "hidden";
    leftMenu.style.maxWidth = "0%";
    rightMenu.style.visibility = "visible";
    rightMenu.style.maxWidth = "100%";
    return;
  }
}
