// Assignment Code
var generateBtn = document.querySelector("#generate");


// password create functions

function getRandomUpper() {
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return upperArray[Math.floor(Math.random() * 26)]
}

function getRandomLower() {
  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return lowerArray[Math.floor(Math.random() * 26)]
}

function getRandomNumber() {
  var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return numberArray[Math.floor(Math.random() * 10)]
}

function getRandomSymbol() {
  var symbolArray = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[']
  return symbolArray[Math.floor(Math.random() * 20)]
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  while (password == "RETRY"){
    password = generatePassword()
  }
  passwordText.value = password;

}
function generatePassword() {
  // empty password to be generated
  var password = "";

  var length = parseInt(prompt('Choose a length for your password, must be 8-128 characters'));
  // maintains criteria for password lenght
  if (length < 8) {
    alert('The password must be at least 8 characters');
    return('RETRY');
  }
  if (length > 128) {
    alert('the password must be less than 128 characters');
    return('RETRY')
  }
  if (!length) {
    alert('Please enter a number')
    return('RETRY')
  }
  // these allow you to choose what characters will be in your password
  var confirmRandomUpper = confirm('Do you want to include Uppercase letters? Ok is yes, Cancel is no');
  var confirmRandomLower = confirm('Do you want to include Lowercase letters? Ok is yes, Cancel is no');
  var confirmRandomNumber = confirm('Do you want to include Numbers? Ok is yes, Cancel is no');
  var confirmRandomSymbol = confirm('Do you want to include Symbols? Ok is yes, Cancel is no');

  if (!confirmRandomUpper && !confirmRandomLower && !confirmRandomNumber && !confirmRandomSymbol) {
    alert('Please choose at least one option')
    return ('RETRY')
  }

  // 0 = randomUpper
  // 1 = randomLower
  // 2 = randomNumber
  // 3 = randomSymbol
  var passLength = 0

  while (password.length < length) {

    if (passLength == 0 && confirmRandomUpper) {
      var randomUpper = getRandomUpper();
      password = password + randomUpper;
    }

    if (passLength == 1 && confirmRandomLower) {
      var randomLower = getRandomLower();
      password = password + randomLower;
    }

    if (passLength == 2 && confirmRandomNumber) {
      var randomNumber = getRandomNumber();
      password = password + randomNumber;
    }

    if (passLength == 3 && confirmRandomSymbol) {
      var randomSymbol = getRandomSymbol();
      password = password + randomSymbol;
    }

    // if passLength is 3, reset to 0. otherwise increase by 1
    if (passLength == 3) {
      passLength = 0;
    }
    else {
      passLength++;
    }

  }
  // enters password into textbox 
  return (password)

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);