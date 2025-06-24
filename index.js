==============================================================
Let's learn about Spread & Rest operator in JavaScript 
==============================================================

The Spread and Rest operators (...) in JavaScript are very powerful and commonly used in modern code. They look the same (...) but behave differently depending on the context.

Let me explain both of them clearly and properly, step by step with examples for each use case. 🔍

--------------------------------------


🔹 (...) Spread Operator :

-> The spread operator is used to expand an array or object into individual elements or properties.


📌 Use Case 1: Copying an Array

// example 👇🏼
const original = [1, 2, 3];
const copy = [...original];

console.log(copy); // [1, 2, 3]

______________________________________________________________


📌 Use Case 2: Merging Arrays

// example 👇🏼
const fruits = ['apple', 'banana'];
const vegetables = ['carrot', 'tomato'];

const shoppingList = [...fruits, ...vegetables];

console.log(shoppingList); // ['apple', 'banana', 'carrot', 'tomato']

__________________________________________________________________________


📌 Use Case 3: Expanding in Function Arguments

// example 👇🏼
const nums = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...nums)); // 6

_________________________________________________________________________


📌 Use Case 4: Copying or Merging Objects

// example 👇🏼
const user = { name: 'Sajid' };
const info = { age: 25 };

const newUser = { ...user, ...info };
console.log(newUser); // { name: 'Sajid', age: 25 }


Note: ✅ Also helpful for avoiding mutation of original object/array.

================================================================================


🔸 (...) Rest Operator :

-> The rest operator is used to collect multiple elements into a single array or object.

   It gathers the rest of the values.


📌 Use Case 1: Function Parameters (Rest Parameters)

// example 👇🏼
function showNames(first, ...others) {
  console.log("First:", first);
  console.log("Others:", others);
}

showNames("Sajid", "Ali", "Rahul", "John");

// Output:
// First: Sajid
// Others: [ 'Ali', 'Rahul', 'John' ]

Note : ✅ Great when you don't know how many arguments will be passed.

__________________________________________________________________________


📌 Use Case 2: Array Destructuring with Rest

// example 👇🏼
const colors = ['red', 'green', 'blue', 'yellow'];

const [first, ...remaining] = colors;

console.log(first);      // red
console.log(remaining);  // ['green', 'blue', 'yellow']


____________________________________________________________________


📌 Use Case 3: Object Destructuring with Rest

// example 👇🏼
const user = {
  name: 'Sajid',
  age: 25,
  email: 'sajid@gmail.com'
};

const { name, ...rest } = user;

console.log(name); // Sajid
console.log(rest); // { age: 25, email: 'sajid@gmail.com' }

-----------------------------------------------------------------------


Thanks for reading 🙏🏼








