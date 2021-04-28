/* let modal  = document.getElementById("modal");
 let request = document.getElementById("request");
 let modalClose = document.getElementsByClassName("modal__close")[0];*/



 bfga.onclick = function () {
    aghf.style.display = "block";
    document.body.style.overflowY = "hidden";
 }

 cgg.onclick = function () {
    aghf.style.display = "none";
    document.body.style.overflowY = "scroll";
 }

 window.onclick = function (event) {
    if (event.target == modalForm) {
        aghf.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}



