// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword("");
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  var length = Number(prompt("Enter the length of your password between 8-128 characters"));
  var char = prompt("What should we include in your password? Type 'uppercase, lowercase, numbers, symbols' to include");
  var passwordText = document.querySelector("#password");

  function password() {
    var passwordGen = {
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers: '0123456789',
      symbols: '!@#$%^&*()-_=+',
    };
    var charsSet = passwordGen[char.toLowerCase()];
    var retVal = "";
    for (i = 0; i <length; i++) {
      retVal += charsSet.charAt(Math.floor(Math.random() * charsSet.length));
    }
    return retVal;
  }
  passwordText.value = password();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!" + copyText.value);
}