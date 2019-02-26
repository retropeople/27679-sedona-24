var button = document.querySelector(".hotels-search-toggler");
var open = document.querySelector(".form-container");

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    open.classList.toggle("form-container-hidden");
  });
  
