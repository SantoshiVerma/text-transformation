// Format text (Bold, Italic, Underline, List)
function format(command) {
  document.execCommand(command, false, null);
}

// Font Size
document.getElementById("fontSize").addEventListener("input", function () {
  document.execCommand("fontSize", false, "7");

  let fontElements = document.getElementsByTagName("font");
  for (let i = 0; i < fontElements.length; i++) {
    if (fontElements[i].size == "7") {
      fontElements[i].removeAttribute("size");
      fontElements[i].style.fontSize = this.value + "px";
    }
  }
});

// Font Color
document.getElementById("fontColor").addEventListener("input", function () {
  document.execCommand("foreColor", false, this.value);
});

// Font Family
document.getElementById("fontFamily").addEventListener("change", function () {
  document.execCommand("fontName", false, this.value);
});