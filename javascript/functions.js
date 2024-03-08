export function formatCreditCardNumber(input) {
  let value = input.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  let formattedValue = "";

  for (let i = 0; i < value.length; i++) {
    if (i % 4 === 0 && i > 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }

  input.value = formattedValue;
}

export function cardDetailShare(input, reciver) {
  reciver.innerHTML = `${input.value.toUpperCase()}`;
}

// export function cardDetailShare(input, reciver) {
//   let text;
//   do {
//     text = reciver.textContent;
//   } while (1 < 0);
//   // let text = reciver.textContent;
//   console.log(text);
//   if (input.value === "") {
//     reciver.textContent = text;
//   } else {
//     reciver.innerHTML = `${input.value.toUpperCase()}`;
//   }
// }

export function input_validation(input) {
  if (input.value === "") {
    input.style.border = "1px solid red";
  }
}

export function dateValid(month_input, year_input) {
  if (month_input.value.length < 2 || year_input.value.length < 4) {
    let date_error = document.getElementById("date_error");
    date_error.style.display = "block";
  } else {
    date_error.style.display = "none";
  }

  if (month_input.value.length == 2) {
    month_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
  }

  if (year_input.value.length == 4) {
    year_input.style.border = "1px solid var(--Light-Grey, #dfdee0)";
  }
}

let inputs = document.querySelectorAll(".input");

export function validation() {
  if (
    Array.from(inputs).every((inp) => inp.value !== "") &&
    cardholder_input.value.includes(" ") &&
    card_number_input.value.length == 19 &&
    month_input.value.length == 2 &&
    year_input.value.length == 4 &&
    cvc_input.value.length == 3
  ) {
    let result_cont = document.createElement("div");
    result_cont.classList.add("result_cont");
    let container = document.querySelector(".container");
    container.appendChild(result_cont);
    result_cont.innerHTML = `
    <img class="check_icon" src="./Icons/Check.png" alt="">
    <h2>Thank you!</h2>
    <p>We've added your card details.</p>
    <button type="button" class="continue_button">Continue</button>
    `;
    let main_form = document.querySelector(".main_form");
    main_form.style.display = "none";
  } else {
    inputs.forEach((inp) => {
      inp.style.border = "1px solid red";
    });
    let label_error = document.querySelectorAll(".label_error");
    label_error.forEach((error) => {
      error.style.display = "block";
    });
  }
}