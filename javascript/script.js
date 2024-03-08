import { formatCreditCardNumber } from "./functions.js";
document
  .getElementById("card_number_input")
  .addEventListener("input", function () {
    formatCreditCardNumber(this);
  });

import { cardDetailShare } from "./functions.js";
import { input_validation } from "./functions.js";

let cardholder_input = document.getElementById("cardholder_input");
let cardholder = document.getElementById("cardholder");
cardholder_input.addEventListener("input", () => {
  cardDetailShare(cardholder_input, cardholder);
});

let cardholder_label_error = document.getElementById("cardholder_label_error");
cardholder_input.addEventListener("focusout", () => {
  if (cardholder_input.value === "") {
    cardholder.textContent = "JANE APPLESEED";
    cardholder_label_error.style.display = "block";
    input_validation(cardholder_input);
  } else {
    cardholder_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
    cardholder_label_error.style.display = "none";
  }

  if (!cardholder_input.value.includes(" ")) {
    cardholder_label_error.style.display = "block";
    input_validation(cardholder_input);
  } else {
    cardholder_label_error.style.display = "none";
    cardholder_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
  }
});

let card_number = document.getElementById("card_number");
let card_number_input = document.getElementById("card_number_input");
card_number_input.addEventListener("input", () => {
  cardDetailShare(card_number_input, card_number);
});

let card_number_label_error = document.getElementById(
  "card_number_label_error"
);
card_number_input.addEventListener("focusout", () => {
  if (card_number_input.value === "") {
    card_number.textContent = "0000 0000 0000 0000";
    card_number_label_error.style.display = "block";
    input_validation(card_number_input);
  } else {
    card_number_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
    card_number_label_error.style.display = "none";
  }

  if (card_number_input.value.length < 19) {
    card_number_label_error.style.display = "block";
    input_validation(card_number_input);
  } else {
    card_number_label_error.style.display = "none";
    card_number_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
  }
});

let month = document.getElementById("month");
let month_input = document.getElementById("month_input");

month_input.addEventListener("input", () => {
  cardDetailShare(month_input, month);
});

import { dateValid } from "./functions.js";

month_input.addEventListener("focusout", () => {
  if (month_input.value === "") {
    month.textContent = "00";
    date_error.style.display = "block";
    input_validation(month_input);
  }

  dateValid(month_input, year_input);
});

let year_input = document.getElementById("year_input");
let year = document.getElementById("year");

year_input.addEventListener("input", () => {
  cardDetailShare(year_input, year);
});

year_input.addEventListener("focusout", () => {
  if (year_input.value === "") {
    year.textContent = "00";
    date_error.style.display = "block";
    input_validation(year_input);
  }

  dateValid(month_input, year_input);
});

let cvc = document.getElementById("cvc");
let cvc_input = document.getElementById("cvc_input");
let cvv_error = document.getElementById("cvv_error");

cvc_input.addEventListener("input", () => {
  cardDetailShare(cvc_input, cvc);
});

cvc_input.addEventListener("focusout", () => {
  if (cvc_input.value === "") {
    cvc.textContent = "000";
    cvv_error.style.display = "block";
    input_validation(cvc_input);
  }

  if (cvc_input.value.length < 3) {
    cvv_error.style.display = "block";
    input_validation(cvc_input);
  } else {
    cvv_error.style.display = "none";
    cvc_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
  }
});

import { validation } from "./functions.js";
let submit_button = document.getElementById("submit_button");
submit_button.addEventListener("click", () => {
  validation();
});