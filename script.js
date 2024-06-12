// Exercise 1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(2, 6));

// Exercise 2
function isAdult(age) {
    if (age>=18){
        return 'Adult'
    } else {
        return 'Minor'
    }
}
console.log('Exercise 1 Result:',isAdult(21))

// Exercise 3
function isCharAVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        return true;
    } else {
        return false;
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 4
function generateEmail(name, domain) {
    return name + '@' + domain;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Exercise 6
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Exercise 7
function calculateTip(billAmount, tipPercentage) {
    return (billAmount * tipPercentage) / 100;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

// Exercise 8
function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        return (temperature * 9/5) + 32 ;
    } else if (scale === 'F') {
        return (temperature - 32) * 5/9 ;
    } else {
        return "Invalid scale"; 
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Exercise 9
function basicCalculator(num1, num2, operation){
    if (operation === 'add') {
        return num1+num2;
    }else if (operation === 'subtract') {
        return num1-num2;
    }else if (operation === 'muktiply') {
        return num1*num2;
    }else if (operation === 'divide') {
        return num1 / num2;
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"))

// Exercise 10
function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));

// Exercise 11
function createUsername(firstName,lastName){
    const firstThreeFristname = firstName.slice(0,3);
    const firstThreeLastname = lastName.slice(0,3);
    const totalCharCount = firstName.length + lastName.length;
    const username = `${firstThreeFristname}${firstThreeLastname}${totalCharCount}`
    return username;
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

// Exercise 12
function numArgs() {
    return arguments.length;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));