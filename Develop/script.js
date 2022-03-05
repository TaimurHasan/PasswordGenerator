// Assignment code here

//available characters for password generation
var availCharacters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

//MAIN ASSIGNMENT CODE FOR GENERATING PASSWORD
var generatePassword = function() {
  var genConfirm = window.confirm("Let's generate your password! Please press 'OK' to get started in specifying your preferred criteria.");

  //starts prompts and code only if user confirms that they would like to get started
  if (genConfirm) {

    var passLength = "";
    //variable and prompt for length of password
    var passLengthValue = function () {
      var passLength = Number(window.prompt("Please specify the number of characters preferred for your password (enter a NUMBER between 8 and 128)"));

      if (isNaN(passLength) || passLength < 8 || passLength > 128) {
        alert("Please enter only a NUMBER between 8 and 128");
        return passLengthValue();
      } else {
        return passLength;
      }
      
    }
    
    window.alert("You have chosen " + passLengthValue() + " as your password length!")

    //variables and prompts for all other password criteria
    var confirmUppercase = window.confirm("Please click 'OK' if you would like your password to include uppercase characters");
    var confirmLowercase = window.confirm("Please click 'OK' if you would like your password to include lowercase characters");
    var confirmNumbers = window.confirm("Please click 'OK' if you would like your password to include numbers");
    var confirmSpecial = window.confirm("Please click 'OK' if you would like your password to include special characters");

  } else { // if initial confirm window is cancelled, returns nothing
    return "";
  }

  return passLength;
};


//STARTER CODE!
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

