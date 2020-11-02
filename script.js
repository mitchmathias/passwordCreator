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




// Prompts
// Below are the prompts the user can choose to create a password



// Write password to the #password input
function writePassword(h) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // empty password to be generated
  var password = "";

  var length = parseInt(prompt('Choose a length for your password, must be 8-128 characters'));
  // maintains criteria for password lenght
  if (length < 8) {
    alert('The password must be at least 8 characters');
    return;
  }
  if (length > 128) {
    alert('the password must be less than 128 characters');
    return
  }
  var confirmRandomUpper = confirm('Do you want to include Uppercase letters? Ok is yes, Cancel is no');
  var confirmRandomLower = confirm('Do you want to include Lowercase letters? Ok is yes, Cancel is no');
  var confirmRandomNumber = confirm('Do you want to include Numbers? Ok is yes, Cancel is no');
  var confirmRandomSymbol = confirm('Do you want to include Symbols? Ok is yes, Cancel is no');

  if (!confirmRandomUpper && !confirmRandomLower && !confirmRandomNumber && !confirmRandomSymbol){
    alert('Please choose at least one option')
    return('Please try again')
  }
  // set password
 var i=0
 while (password.length < length){
   // 0 = randomUpper
   // 1 = randomLower
   // 2 = randomNumber
   // 3 = randomSymbol
  var selector = i % 4; 
  
  if (selector == 0 && confirmRandomUpper) {
    var randomUpper = getRandomUpper();
    password = password + randomUpper;
  }

  if (selector == 1 && confirmRandomLower) {
    var randomLower = getRandomLower();
    password = password + randomLower;
  }

  if (selector == 2 && confirmRandomNumber) {
    var randomNumber = getRandomNumber();
    password = password + randomNumber;
  }

  if (selector == 3 && confirmRandomSymbol) {
    var randomSymbol = getRandomSymbol();
    password = password + randomSymbol;
  }
  i++;
 }
 return (password)

}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);