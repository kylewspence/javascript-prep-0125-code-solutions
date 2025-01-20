/* Your JS goes in this file */

// Are they an adult?
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  }
}

const isAdultResult = isAdult(35);
console.log(isAdultResult);

// test 2
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  }
}

const isAdultResult2 = isAdult(10);
console.log(isAdultResult2);

// test 3
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  }
}

const isAdultResult3 = isAdult(18);
console.log(isAdultResult3);

// Did Student Pass?
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else if (score < 70) {
    return false;
  }
}

const didStudentPassResult = didStudentPass(92);
console.log(didStudentPassResult);

// test 2
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else if (score < 70) {
    return false;
  }
}

const didStudentPassResult2 = didStudentPass(65);
console.log(didStudentPassResult2);

// test 3
function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else if (score < 70) {
    return false;
  }
}

const didStudentPassResult3 = didStudentPass(70);
console.log(didStudentPassResult3);

// Calculator
function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

const gradeCalculatorResult = gradeCalculator(99);
console.log(gradeCalculatorResult);

// Testing Loop Idea - I had help with this.

const testScores = [55, 65, 75, 85, 95, 105];

for (let index = 0; index < testScores.length; index++) {
  const score = testScores[index];
  const grade = gradeCalculator(score);
  console.log('Test Score ' + score + ' Grade ' + grade);
}

// Seasons

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

const seasonMessengerResult = seasonMessenger('summer');
console.log(seasonMessengerResult);

// Testing Loop for Seasons

const seasons = ['summer', 'spring', 'autumn', 'winter', 'boolean'];

for (let index = 0; index < seasons.length; index++) {
  const strings = seasons[index];
  const response = seasonMessenger(strings);
  console.log('Season is: ' + strings + '.' + ' Which means ' + response + '.');
}

// Day Detector

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}

const dayDetectorResult = dayDetector('saturday');
console.log(dayDetectorResult);

// Testing Loop for Days

const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
  'lazyday',
];

for (let index = 0; index < days.length; index++) {
  const dayCheck = days[index];
  const result = dayDetector(dayCheck);
  console.log('Today is ' + dayCheck + ' and that means ' + result);
}
