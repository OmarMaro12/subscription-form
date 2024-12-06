// JavaScript Validation for Full Name
const form = document.getElementById("gym-form");
const fullNameInput = document.getElementById("full-name");
const nameError = document.getElementById("name-error");

form.addEventListener("submit", function (e) {
  // Reset error display
  nameError.style.display = "none";

  // Validate Full Name
  if (fullNameInput.value.trim().length < 12) {
    e.preventDefault(); // Prevent form submission
    nameError.style.display = "block";
    fullNameInput.focus();
  }
});
// JavaScript for toggling forms
const subscriptionForm = document.querySelector("#gym-form");
const loginForm = document.querySelector("#login");

const loginLink = document.querySelector('a[href="#login"]');
const subscribeLink = document.querySelector('a[href="#subscribe"]');

loginLink.addEventListener("click", function (e) {
  e.preventDefault();
  subscriptionForm.parentElement.style.display = "none";
  loginForm.style.display = "block";
});

subscribeLink.addEventListener("click", function (e) {
  e.preventDefault();
  loginForm.style.display = "none";
  subscriptionForm.parentElement.style.display = "block";
});
