document.addEventListener("DOMContentLoaded", ()=> {
  document
    .getElementById("billing-checkbox")
    .addEventListener("change", toggleBilling);
  },
  false,
);

function toggleBilling() {
  const billingItems = 
  document.querySelectorAll('#billing input[type="text"]');

  const billingLabels = 
  document.querySelectorAll(".billing-label");

  for(let i = 0; i < billingItems.length; i++) {
    billingItems[i].disabled = !billingItems[i].disabled;

    if (
      billingLabels[i].getAttribute("class") ===
  "billing-abel disabled-label"
    ) {
      billingLabels[i].setAttribute("class", "billing-label"); 
    } else {
      billingLabels[i].setAttribute("class", "billing-label disabled-label");
    }
  }
}