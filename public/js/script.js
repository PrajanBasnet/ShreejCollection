let visibleMenu = document.querySelector(".visibleMenu");
let menuIcon = document.querySelector("#menuIcon");
let opened = false;



menuIcon.addEventListener("click", () => {


    if (opened == false) {

        visibleMenu.style.visibility = 'visible';
        document.querySelector(".visibleMenu").style.display = "flex";
        opened = true;

    } else if (opened == true) {

        document.querySelector(".visibleMenu").style.display = "none";
        visibleMenu.style.visibility = "hidden";
        opened = false;

    }


})

window.onload = (event) => {
    window.addEventListener("resize", () => {
        let height = window.innerHeight;
        let width = window.innerWidth;
        if (width >= 850) {
            visibleMenu.style.visibility = 'visible';
            document.querySelector(".visibleMenu").style.display = "flex";
        }
        console.log("width", width);

    })
}


