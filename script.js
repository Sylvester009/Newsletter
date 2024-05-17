const button = document.getElementById("button");
const labelText = document.getElementById("label-text2");
const email = document.getElementById("email");

const signUp = document.getElementById("Sign-up");
const successMsg = document.getElementById("success-message");
const dismiss = document.getElementById("dismiss");

button.addEventListener("click", function (event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Get the email input value
  var emailValue = email.value;

  // Regular expression for email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email is valid
  if (!emailRegex.test(emailValue)) {
    labelText.textContent = "Valid email required";
    labelText.style.color = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(4, 100%, 67%, 0.3)";
    return;
  } else {
    signUp.style.display = "none";
    successMsg.style.display = "flex";
    // Reset the email input value
    email.value = "";
    labelText.textContent = "";
    email.style.borderColor = "";
    email.style.color = "";
    email.style.backgroundColor = "";
    return;
  }
});

dismiss.addEventListener("click", () => {
  signUp.style.display = "flex";
  successMsg.style.display = "none";
});
