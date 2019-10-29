//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
// Generator functions
clipboardEl.addEventListener('click', () => {
  const teatarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if(!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied!');
})
// Generate event listener
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowerEl.checked;
  const hasUpper = upperEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Clipboard

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typeCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  if (typeCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typeCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
    })
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;

};

//Generates a lower case letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Generates a upper case letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generates a number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Generates a symbol
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());
