# Password Generator
## Description

Welcome to the Password Generator repository!

The link below will take you to the website hosting the Password Generator, where you will be able to generate a random password according to your preferred criteria. <br/>

You will be prompted on the following criteria:
- Password Length (8 to 128 characters)
- Uppercase letters
- Lowercase letters
- Numbers
- Special characters

## Application Details

The application was built primarily using JavaScript, with support from HTML and CSS to host the tool. Within JavaScript, a combination of objects and methods were used, including variables, functions, loops, and control flows. The tool uses prompts, variables, and if statements to create a special character list dependent on the user's input and preference on uppercase, lowercase, numbers, and special characters. The tool is programmed to force the user to confirm at least one character type to prevent generating an empty password and to select a WHOLE number between 8 and 128 characters. Lastly, the tool uses a for loop and the random method within the Math object to select random characters out of the available character list up to the password length that the user requested.

**Languages Used**
- HTML
- CSS
- JavaScript

**User Story:** <br/>
AS AN employee with access to sensitive data <br/>
I WANT to randomly generate a password that meets certain criteria <br/>
SO THAT I can create a strong password that provides greater security <br/>

**Acceptance Criteria:** <br/>
GIVEN I need a new, secure password <br/>
WHEN I click the button to generate a password <br/>
THEN I am presented with a series of prompts for password criteria <br/>
WHEN prompted for password criteria <br/>
THEN I select which criteria to include in the password <br/>
WHEN prompted for the length of the password <br/>
THEN I choose a length of at least 8 characters and no more than 128 characters <br/>
WHEN asked for character types to include in the password <br/>
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters <br/>
WHEN I answer each prompt <br/>
THEN my input should be validated and at least one character type should be selected <br/>
WHEN all prompts are answered <br/>
THEN a password is generated that matches the selected criteria <br/>
WHEN the password is generated <br/>
THEN the password is either displayed in an alert or written to the page <br/>

## Application Link and Screenshot
**Link to Application**

[Password Generator](https://taimurhasan.github.io/PasswordGenerator/)

**Screenshot of Application**

![Password Generator Application Screenshot](./assets/images/Screenshot%202022-03-08%20174202.png)

