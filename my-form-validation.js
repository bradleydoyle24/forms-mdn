const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const choose = document.getElementById("choose");

choose.addEventListener("input", (event) => {
  if (choose.validity.patternMismatch) {
    choose.setCustomValidity("Type 'banana' or 'cherry'!");
  } else {
    choose.setCustomValidity("");
  }
});

const fig = document.getElementById("fig");

fig.addEventListener("input", (event) => {
  if (fig.validity.patternMismatch) {
    fig.setCustomValidity("Type 'fig' or 'no'.");
  } else {
    fig.setCustomValidity("Good job!");
  }
});

const form = document.querySelector("form");
const email2 = document.getElementById("mail2");
const emailError = document.querySelector("#mail2 + span.error");

email2.addEventListener("input", (event) => {
  if (email2.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email2.validity.valid) {
    showError();
    event.preventDefault;
  }
})

function showError() {
  if (email2.validity.valueMissing) {
    emailError.textContent = "you need to enter an email address, boo.";
  } else if (email2.validity.typeMismatch) {
    emailError.textContent = "Need to enter an email address.";
  } else if (email2.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = "error active";
}