let modal  = document.getElementById("modal");
let request = document.getElementsByClassName("request");
let modalClose = document.getElementsByClassName("modal__close")[0];

for(i = 0; i < request.length; i++) {
   request[i].onclick = function () {
      modal.style.display = "block";
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = 15 + ("px ");
   }
}

modalClose.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = 0 + ("px ");
 }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
        document.body.style.paddingRight = 0 + ("px ");
    }
}



