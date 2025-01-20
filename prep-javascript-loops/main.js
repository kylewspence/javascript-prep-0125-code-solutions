// create your loops here.
function whileLoop1() {
  const newArray = [];
  let index = 0;
  while (index < 10) {
    newArray.push(index);
    index++;
  }
  console.log('whileLoop1 output ', newArray);
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  newArray2 = [];
  let index = 0;
  while (index < 20) {
    newArray2.push(index++);
    index++;
  }
  console.log('whileLoop2 output ', newArray2);
}

const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  newArray3 = [];
  for (let index = 0; index < 10; index++) {
    newArray3.push(index);
  }
  return newArray3;
}

const forLoopResult = forLoop1();
console.log('forLoop1 output ', forLoopResult);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ', index);
  }
}

console.log(forLoop2());

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  newArray = [];
  for (const prop in person) {
    newArray.push(prop);
  }
  console.log(newArray);
}

const forInLoop1Result = forInLoop1();
console.log(forInLoop1Result);

function forInLoop2(object) {
  newArray2 = [];
  for (const prop in person) {
    newArray2.push(person[prop]);
  }
  console.log(newArray2);
}

const forInLoop2Result = forInLoop2();
console.log(forInLoop2Result);
