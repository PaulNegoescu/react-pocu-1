'use strict';

const firstName = 'Ionut';
const a = 1;
const b = '2';
let i = '3';
i += 2;

// Primitives:
// number, string, boolean, null, undefined, symbol, bigint

const nota = '6';
// Conditional statement
if (nota >= 5) {
  console.log('Studentul trece');
} else {
  console.log('Studentul pica');
}

if (nota === 4) {
} else if (nota === 5) {
} else if (nota === 7 || nota === 8 || nota === 9 || nota === 6) {
}

switch (nota) {
  case 4:
    console.log('Studentul a picat la limita');
    break;
  case 5:
    console.log('Studentul a trecut la limita');
    break;
  case 6: // fallthrough case
    console.log('Studentul a luat 6');
  case 7:
  case 8:
  case 9:
    console.log('Studentul a obtinut un scor suficient');
    break;
  case 3:
  case 2:
  case 1:
    console.log('studentul a picat de tot');
    break;
  default:
    console.log('Studentul a trecut cu excelent');
}

// console.clear();

if (function () {}) {
  console.log('A intrat in if');
}

console.log(false || 0 || false);
console.log(true && null && 123);
console.clear();

const dateDeLaServer = null;
if (dateDeLaServer) {
  console.log(dateDeLaServer);
}

// shorthand conditional expression
const ceva = dateDeLaServer && console.log(dateDeLaServer);
console.log({ ceva, nota, a, b });

// ternary operator condition ? value_if_true : value_if_false
const valoareFinala = dateDeLaServer ? dateDeLaServer : 'nu avem date';
console.log({ valoareFinala });

// the equivalent if/else statement
let valoareFinala1;
if (dateDeLaServer) {
  valoareFinala1 = dateDeLaServer;
} else {
  valoareFinala1 = 'nu avem date';
}

console.log({ valoareFinala1 });

// Complex types:
// object, array, function, set, map, ...

const noteleStudentului = [5, 10, 6, 10, 7];
console.log(noteleStudentului[2], noteleStudentului.length);

noteleStudentului.push(10);

console.clear();

let sum = 0;
for (let i = 0; i < noteleStudentului.length; i++) {
  const nota = noteleStudentului[i];
  sum += nota;
}

const avg = sum / noteleStudentului.length;
console.log(avg);

// for .. of
sum = 0;
for (const nota of noteleStudentului) {
  sum += nota;
}

console.log(sum / noteleStudentului.length);

// forEach
sum = 0;
noteleStudentului.forEach((nota) => (sum += nota));

console.log(sum / noteleStudentului.length);

// Reduce
sum = noteleStudentului.reduce((sum, nota) => sum + nota);

console.log(sum / noteleStudentului.length);

let prod = 1;

{
  let i = 0;
  while (i > noteleStudentului.length) {
    prod *= noteleStudentului[i];

    i++;
  }
}

console.log(prod);

prod = 1;
{
  let i = 0;
  do {
    prod *= noteleStudentului[i];

    i++;
  } while (i > noteleStudentului.length);
}
console.log(prod);
console.clear();

// function declaration
function add(a, b) {
  return a + b;
}

const sum2 = add(prod, 4);
console.log(sum2);
console.log(add(prod, 7));

// function expression
const multiply = function (a, b = 0) {
  return a * b;
};
console.log(multiply(4, 4));

// callback
function addThenDoSomething(a, b = 0, something) {
  const sum = a + b;
  something(sum);
  return sum;
}
// arrow function, folosit ca si callback
console.log(addThenDoSomething(10, 12, (res) => console.log(res * 3)));

// arrow function, folosit ca si function expression
const add3 = (a, b, c = 0) => a + b + c;
console.log(add3(1, 2, 3));

console.log(add3(1, 2, 6, 8));

// rest parameters
function test(unu, ...restulNumelor) {
  console.log({ unu, restulNumelor });
}

test('Paul', 'Ionut', 'Andreea', 'Cristina');

function add4(...numbers) {
  return numbers.reduce((sum, num) => sum + num);
}

console.log(add4(1, 2, 3, 4));

// spread opertor ...
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [-1, 0, ...arr3, ...arr4, 7, 8, 9];

console.log(arr5);

console.log(add4(...arr5, 6));

const employee = {
  firstName: 'Paul',
  lastName: 'Negoescu',
  weight: 95,
  height: 1.85,
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  },
};

const obj = {
  weight: 100,
  height: 1.75,
  func: employee.calculateBmi,
};

console.clear();
console.dir(obj);

const a1 = [];
const a2 = [[1, 2, 4], { prop: 'test' }, 5, 6];

function demo(arr) {
  const clone = [...arr];
  clone[0] = [...clone[0]];
  clone[0].push(5);

  console.log(clone);
}

demo(a2);

console.log(a2, obj);
