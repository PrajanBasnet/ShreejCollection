let visibleMenu = document.querySelector(".visibleMenu");
let menuIcon = document.querySelector("#menuIcon");
let opened = false;
let height = window.innerHeight;
let width = window.innerWidth;


menuIcon.addEventListener("click", () => {


    if (opened == false) {

        visibleMenu.style.visibility = 'visible';
        document.querySelector(".visibleMenu").style.display = "flex";
        opened = true;
        console.log("widht", width);
    } else if (opened == true) {

        document.querySelector(".visibleMenu").style.display = "none";
        visibleMenu.style.visibility = "hidden";
        opened = false;
        console.log("width", height);
    }


})

window.addEventListener("resize", () => {
    if (width >= 750) {
        visibleMenu.style.visibility = 'visible';

        document.querySelector(".visibleMenu").style.display = "flex";

    }

})