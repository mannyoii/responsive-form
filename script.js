const form = document.querySelector("form");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const regexPasswordCheck = passwordInput.value.match(regex);

  if (regexPasswordCheck === false) {
    event.preventDefault();
    alert("password must contain");
  } else {
    alert("password is valid");
  }
});
