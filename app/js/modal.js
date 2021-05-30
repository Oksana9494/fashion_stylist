let modal  = document.getElementById("modal");
let request = document.getElementsByClassName("request");
let modalClose = document.getElementsByClassName("modal__close")[0];

for(i = 0; i < request.length; i++) {
   request[i].onclick = function () {
      modal.style.display = "block";
      document.body.classList.add('non-scrolling');
   }
}

modalClose.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove('non-scrolling');
 }

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('non-scrolling');
    } else if (event.target == menu) {
        menu.style.display = "none";
        document.body.classList.remove('non-scrolling');
    }
}



