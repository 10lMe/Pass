const passwordBox = document.getElementById("pass");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  GeneratePassword();   
});
function GeneratePassword() {
  let password = "";
  let length = 12;
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let specialCharacters = "!@#$%^&*()_+";
  
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
      case 0:
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        break;
      case 1:
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        break;
      case 2:
        password += numbers.charAt(Math.floor(Math.random() * numbers.length));
        break;
      case 3:
        password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
        break;
    }
  }
  passwordBox.value = password;
}
const copyPasswordBtn = document.querySelector(".display i");

copyPasswordBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordBox.value);
  alert("Password Copied");
});