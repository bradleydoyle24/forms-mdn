/* Get form itself and email input box, as well as
span element into which we will place error message. */

const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  /* Each time user types something, we check if form fields are valid */

  if (email.validity.valid) {
    /* in case ther is an error message visibile, if the field is valid, we remove the message */
    emailError.textContent = ""; // Reset content of the message.
    emailError.className = "error"; // Reset visual state of message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // If email field is valid, we let the form submit
  if (!email.validity.valid) {
    // If not, we display appropriate error message
    showError();
    // Then prevent form from being sent by canceling the event.
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If field is empty,
    // Display the following message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it doesn't containt an email address
    // display the following error message.
    emailError.textContent = "Value entered needs to be an email address";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters, you entered ${email.value.length}.`;
  }
  // Style appropriately.
  emailError.className = "error active";
}

