var toggler = document.querySelector(".hotels-search-toggler");
var formContainer = document.querySelector(".form-container");
var form = formContainer.querySelector(".booking-form");
var arrivalDate = form.querySelector("[name=arrival_date]");
var departureDate = form.querySelector("[name=departure_date]");
var adultsValue = form.querySelector("[name=adults]");
var kidsValue = form.querySelector("[name=kids]");

  toggler.addEventListener("click", function (evt) {
    evt.preventDefault();
    formContainer.classList.toggle("form-container-hidden");
    formContainer.classList.remove("form-error");
  });

  document.addEventListener('DOMContentLoaded', function() {
     formContainer.classList.add("form-container-hidden");
  }, false);

  form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value || !adultsValue.value || !kidsValue.value) {
      evt.preventDefault();
      formContainer.classList.remove("form-error");
      formContainer.offsetWidth = formContainer.offsetWidth;
      formContainer.classList.add("form-error");
    }
  })
