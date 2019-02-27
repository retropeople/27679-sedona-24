var toggler = document.querySelector(".hotels-search-toggler");
var formContainer = document.querySelector(".form-container");

  toggler.addEventListener("click", function (evt) {
    evt.preventDefault();
    formContainer.classList.toggle("form-container-hidden");
  });
