const number1 = 0;
const number2 = 1;
const product = number1 * number2;
console.log('Product: ' + product);
console.log('typeof for product is: ' + typeof product);

const charge = 5;
const payment = 1;
const amountRemaining = payment - charge;
console.log('Amount remaining: ' + amountRemaining);
console.log('typeof for amountRemaining is: ' + typeof amountRemaining);

const tests = 5;
const assignments = 10;
const final = 1;
const grade = (tests + assignments + final) / 3;
console.log('Grade: ' + grade);
console.log('typeof for grade is: ' + typeof grade);

const firstName = 'Kyle';
const lastName = 'Spence';
const fullName = firstName + ' ' + lastName;
console.log('My name is ' + fullName);
console.log('typeof for fullName is: ' + typeof fullName);

const pH = 15;
const isAcidic = pH < 7;
console.log('Is it acidic: ' + isAcidic);
console.log('typeof for isAcidic is ' + typeof isAcidic);

const numberOfSoldiers = 1000;
const isSparta = numberOfSoldiers === 300;
console.log('Are we cooler than Sparta at Thermopylae: ' + isSparta);
console.log('typeof for isSparta is: ' + typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT!';
console.log('Some people say that ' + nickname);
console.log('typeof for nickname is: ' + typeof nickname);
