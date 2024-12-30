console.log("Working js");
let visibleMenu = document.querySelector(".visibleMenu");
let mainUL = document.getElementsByTagName("ul");
let opened = true;
function openMenu() {
    if (opened == false) {
        visibleMenu.style.visibility = 'visible';
        document.querySelector(".visibleMenu").style.display = "flex";

        // mainUL.style.display = "block";
        console.log("clicekd ");
        opened = true;
    } else if (opened == true) {
        document.querySelector(".visibleMenu").style.display = "none";

        visibleMenu.style.visibility = "hidden";
        opened = false;
    }

}