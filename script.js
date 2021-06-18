"use strict";

const password = document.getElementById("pwd");
const PasswordCopy = document.getElementById("copy");
const passwordLength = document.getElementById("len");
const passwordUpper = document.getElementById("upper");
const passwordLower = document.getElementById("lower");
const passwordNumber = document.getElementById("number");
const passwordSymbol = document.getElementById("symbol");
const generatePassword = document.getElementById("generate");
const clipboard = document.querySelector(".password-container .clipboard");
const generateAlert = document.querySelector(".password-container .gen");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=-{}][|:;?/>.<,";

// EVENTLISTENERS------------------------------------------->
generatePassword.addEventListener("click", displayPassword);
PasswordCopy.addEventListener("click", copyPassword);

function copyPassword() {
  const textArea = document.createElement("textarea");
  document.body.appendChild(textArea);
  textArea.innerText = password.innerText;
  textArea.select();
  document.execCommand("copy");
  textArea.remove();

  if (password.innerText === "") {
    generateAlert.classList.remove("hide");
    password.style.backgroundColor = "rgb(243, 174, 174)";
    setTimeout(() => {
      password.style.backgroundColor = "white";
      generateAlert.classList.add("hide");
    }, 1800);
  }

  if (password.innerText !== "") {
    clipboard.classList.remove("hide");
    setTimeout(() => {
      clipboard.classList.add("hide");
    }, 1800);
  }
}

// RANDOM LETTERS, NUMBERS,SYMBOLS-------------------------->
function getUpperCase() {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}
function getLowerCase() {
  return lowerCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function displayPassword() {
  if (
    !passwordUpper.checked &&
    !passwordLower.checked &&
    !passwordNumber.checked &&
    !passwordSymbol.checked
  ) {
    generateAlert.classList.remove("hide");
    password.style.backgroundColor = "rgb(243, 174, 174)";
    setTimeout(() => {
      password.style.backgroundColor = "white";
      generateAlert.classList.add("hide");
    }, 1800);
  } else {
    let len = passwordLength.value;

    let randomPassword = "";

    for (let i = 0; i <= len - 1; i++) {
      const pass = genRandomPassword();
      randomPassword += pass;
    }
    password.innerText = randomPassword;
  }
}

function genRandomPassword() {
  const xyz = [];

  if (passwordUpper.checked) {
    xyz.push(getUpperCase());
  }

  if (passwordLower.checked) {
    xyz.push(getLowerCase());
  }

  if (passwordNumber.checked) {
    xyz.push(getNumber());
  }
  if (passwordSymbol.checked) {
    xyz.push(getSymbol());
  }

  if (xyz.length === 0) return "";

  return xyz[Math.floor(Math.random() * xyz.length)];
}
