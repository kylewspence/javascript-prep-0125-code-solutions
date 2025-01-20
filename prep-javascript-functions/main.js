function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name;
}

const getGreetingResult = getGreeting('Kyle');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}

const addAndMultiplyBy5Result = addAndMultiplyBy5(1, 2);
console.log('addAndMultiplyBy5 Exercise ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(5, 10);
console.log('multiplyAndDivideBy5 Exercise ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersResult = subtractTwoNumbers(5, 3);
console.log('subtractTwoNumbersResult ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  const result = radius * 2 * Math.PI;
  return result;
}

const getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumferenceResult ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const getFullNameResult = getFullName('Kyle', 'Spence');
console.log('getFullName Exercise ' + getFullNameResult);

function cube(number) {
  return number * number * number;
}

const cubeResult = cube(5);
console.log('cube Exercise ', cubeResult);
