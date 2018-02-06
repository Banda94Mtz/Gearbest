function funcionMenu() {
    var x = document.getElementById("menuArriba");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}