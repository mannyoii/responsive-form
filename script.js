const form = document.querySelector("form");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  // const regex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /\d/;
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  const hasUppercase = uppercaseRegex.test(passwordInput.value);
  const hasNumber = numberRegex.test(passwordInput.value);
  const hasSpecialChar = specialCharRegex.test(passwordInput.value);

  // const regexPasswordCheck = passwordInput.value.match(regex);

  if (hasUppercase && hasNumber && hasSpecialChar) {
    event.preventDefault();
    alert("password is valid");
  } else {
    console.log(passwordInput.value);
    alert(
      "password is not valid, please make sure it has atleast a uppercase letter, a number and a non-alphanumeric charcater"
    );
  }
});
