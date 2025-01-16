let person = {
  firstName: 'Jon',
  lastName: 'Snow',
  hobby: 'King in the North',
};
console.log(person);

let fullName =
  "The person's name is " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'being cool';
console.log('Their job is ' + person.job + '.');

person['previousJob'] = 'knowing nothing.';
console.log('Their previous job was ' + person.previousJob);

console.log(person);
