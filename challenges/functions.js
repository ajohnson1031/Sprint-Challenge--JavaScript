// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function greeting(x, y) {
  return `Hello ${x} ${y}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
console.log(consume(2, 2, add));

consume(10, 16, multiply); // 160
console.log(consume(10, 16, multiply));

consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!
console.log(consume("Mary", "Poppins", greeting));

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  //console.log(x);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    //const x = "Hello, I'm not going to be consoled.";
  }
  nestedFunction();
}
myFunction();

//Nested function can access the variable internal because of scope. Any function can access data from the scope above it, up to an including the global scope. That means even deeply nested functions can access data and paramaters relating to the window object. I've created a variable "X" on line 56, and a console.log on line 51 that shows how nothing can reach into nestedFunction(), even though nestedFunction reaches out.
