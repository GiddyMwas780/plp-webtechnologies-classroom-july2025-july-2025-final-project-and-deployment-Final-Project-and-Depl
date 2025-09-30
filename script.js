/* ================================
   Part 1: Variables and Conditionals
================================= */

// Variable declarations
let username = "Gideon";
let age = 20;

// Conditional statement
if (age >= 18) {
  console.log(username + " is an adult.");
} else {
  console.log(username + " is a minor.");
}

/* ================================
   Part 2: Functions
================================= */

// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "! Welcome to the site.";
}

// Function 2: Calculate sum of two numbers
function calculateSum(a, b) {
  return a + b;
}

/* ================================
   Part 3: Loops
================================= */

// Example 1: For loop
function displayNumbers() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result += i + " ";
  }
  return result;
}

// Example 2: While loop
function createListItems() {
  let items = [];
  let i = 1;
  while (i <= 3) {
    items.push("Item " + i);
    i++;
  }
  return items;
}

/* ================================
   Part 4: DOM Interactions
================================= */

// DOM element references
const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const listOutput = document.getElementById("listOutput");

// Interaction 1: Button to show greeting
document.getElementById("greetBtn").addEventListener("click", function() {
  output1.textContent = greetUser(username);
});

// Interaction 2: Button to calculate sum
document.getElementById("sumBtn").addEventListener("click", function() {
  let sum = calculateSum(10, 20);
  output2.textContent = "The sum of 10 + 20 is: " + sum;
});

// Interaction 3: Button to display loops
document.getElementById("loopBtn").addEventListener("click", function() {
  listOutput.innerHTML = ""; // clear previous items

  // Add numbers (for loop)
  let nums = displayNumbers();
  let numItem = document.createElement("li");
  numItem.textContent = "Numbers: " + nums;
  listOutput.appendChild(numItem);

  // Add items (while loop)
  let items = createListItems();
  items.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    listOutput.appendChild(li);
  });
});
