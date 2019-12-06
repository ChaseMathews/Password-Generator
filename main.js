var specialCharacters = [
    "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",",
    ")", "(", "}", "{", "]", "[", "~", "-", "_", "."
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperCasedCharacters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];


function generatePassword() {
    var options = getUserOptions();

    var password = [];
    var SpecialChar = [];
    var possibleChar = [];
    var guarantedChar = [];

    if (options.hasSpecialChar) {
        possibleChar = possibleChar.concat(specialCharacters);
        guarantedChar.push(getRandom(specialCharacters));

    }
    if (options.hasNumericChar) {
        possibleChar = possibleChar.concat(numericCharacters);
        guarantedChar.push(getRandom(numericCharacters));
    }
    if (options.hasLowerChar) {
        possibleChar = possibleChar.concat(lowerCasedCharacters);
        guarantedChar.push(getRandom(lowerCasedCharacters));

    }
    if (options.hasUpperChar) {
        possibleChar = possibleChar.concat(upperCasedCharacters);
        guarantedChar.push(getRandom(upperCasedCharacters));

    }
    for (var i = 0; i < options.length; i++) {
        var character = getRandom(possibleChar);
        password.push(character)
    }
    for (var i = 0; i < guarantedChar.length; i++) {
        password[i] = guarantedChar[i];
    }
    console.log("password array: " + password)
    return password.join("");

    

}
function getRandom(data) {
    var randIndex = Math.floor(Math.random() * data.length);
    var randomValue = data[randIndex];
    console.log("random: " + randomValue)
    return randomValue;

}

function getUserOptions() {
    const characterLength = parseInt(prompt("How long would you like your password to be?"));
    if (isNaN(characterLength) === true) {
        alert("Password length must be a number");
        return;
    }
    if (characterLength < 8) {
        alert("Password must be at least 8 characters")
    }
    if (characterLength > 128) {
        alert("Password length must be less than 129 characters");
        return;
    }
    var hasSpecialChar = confirm("Click ok to confirm including special characters");
    var hasNumericChar = confirm("Click ok to confirm including numeric characters");
    var hasLowerChar = confirm("Click ok to confirm including lowercase characters");
    var hasUpperChar = confirm("Click ok to confirm including uppercase characters");

    var passwordOptions = {
        length: characterLength,
        hasSpecialChar: hasSpecialChar,
        hasNumericChar: hasNumericChar,
        hasLowerChar: hasLowerChar,
        hasUpperChar: hasUpperChar
    }
    console.log(passwordOptions)
    return passwordOptions
}


var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", generatePassword)

function displayPassword() {
    document.getElementById(password).innerHTML
}

