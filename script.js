// Function to calculate based on selected operation
function calculate() {
  // Retrieving input values and operation
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let resultSection = document.getElementById("resultSection");

  let result;
  let explanation;

  // Switch statement to perform different operations
  switch (operation) {
    case "gcd":
      // Calculating Greatest Common Divisor
      result = calculateGCD(num1, num2);
      // Displaying result and explanation
      resultSection.innerHTML = `<p>The Greatest Common Divisor of ${num1} and ${num2} is ${result}</p>`;
      explanation =
        "The greatest common divisor (GCD) of two numbers is the largest positive integer that divides both numbers without a remainder.";
      break;
    case "lcm":
      // Calculating Least Common Multiple
      result = calculateLCM(num1, num2);
      // Displaying result and explanation
      resultSection.innerHTML = `<p>The Least Common Multiple of ${num1} and ${num2} is ${result}</p>`;
      explanation =
        "The least common multiple (LCM) of two numbers is the smallest positive integer that is divisible by both numbers without a remainder.";
      break;
    case "pns":
      // Check if the second number is less than the first number
      if (num2 < num1) {
        explanation =
          "Please ensure that your first number represents the starting point and your second number represents the ending point.";
      } else {
        // Finding prime numbers between two numbers
        result = findPrimesBetween(num1, num2);
        // Displaying result and explanation
        resultSection.innerHTML = `<p>The Prime Numbers between ${num1} and ${num2} is [ ${result} ]</p>`;
        explanation =
          "A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.";
        console.log(resultSection);
      }
      break;
    case "mod":
      // Calculating modulus
      result = calculateMod(num1, num2);
      // Displaying result and explanation
      resultSection.innerHTML = `<p>The modulus of ${num1} and ${num2} is ${result}.</p>`;
      explanation =
        "The modulus operation returns the remainder when dividing the first number by the second number.";
      break;
    default:
      result = "Invalid operation";
  }

  // Displaying the explanation of the operation
  displayExplanation(explanation);
}

// Function to calculate Greatest Common Divisor
function calculateGCD(a, b) {
  return b === 0 ? a : calculateGCD(b, a % b);
}

// Function to calculate Least Common Multiple
function calculateLCM(a, b) {
  return (a * b) / calculateGCD(a, b);
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// Function to find prime numbers between two numbers
function findPrimesBetween(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Function to calculate modulus
function calculateMod(a, b) {
  return b === 0 ? "Cannot divide by zero" : a % b;
}

// Function to display explanation
function displayExplanation(explanation) {
  let explanationSection = document.getElementById("explanationSection");
  explanationSection.innerHTML = `<p>${explanation}</p>`;
}

// Function to calculate set operations
function calculateSets() {
  const setAInput = document.getElementById("setA").value.trim();
  const setBInput = document.getElementById("setB").value.trim();
  const operation = document.getElementById("setOperations").value;
  let resultSection = document.getElementById("setsResultSection");

  let result = [];
  let explanation;

  if (setAInput === "" || setBInput === "") {
    // Display error if either set is empty
    resultSection.innerHTML = "<p>Please enter both Set A and Set B.</p>";
    explanation = " ";
  } else {
    // Convert input strings to sets
    let setA = new Set(setAInput.split(",").map(Number));
    let setB = new Set(setBInput.split(",").map(Number));

    // Switch statement to perform different set operations
    switch (operation) {
      case "union":
        // Calculating union of sets
        result = calculateUnion(setA, setB);
        // Displaying result and explanation
        resultSection.innerHTML = `<p>The union between Set A and Set B is  [${Array.from(
          result
        )
          .sort((a, b) => (a > b ? 1 : -1))
          .join(", ")}]</p>`;
        explanation =
          "The union of two sets is the set of all elements that belong to either set or both sets.";
        break;
      case "intersection":
        // Calculating intersection of sets
        result = calculateIntersection(setA, setB);
        // Displaying result and explanation
        resultSection.innerHTML = `<p>The intersection between Set A and Set B is  [${Array.from(
          result
        )
          .sort((a, b) => (a > b ? 1 : -1))
          .join(", ")}]</p>`;
        explanation =
          "The intersection of two sets is the set of all elements that belong to both sets.";
        break;
      case "difference":
        // Calculating difference of sets
        result = calculateDifference(setA, setB);
        // Displaying result and explanation
        resultSection.innerHTML = `<p>The difference between Set A and Set B is  [${Array.from(
          result
        )
          .sort((a, b) => (a > b ? 1 : -1))
          .join(", ")}]</p>`;
        explanation =
          "The difference of two sets is the set of all elements that belong to the first set but not the second set.";
        break;
      default:
        result = "Invalid operation";
    }
  }

  // Displaying explanation of set operation
  displaySetsExplanation(explanation);
}

// Function to calculate union of sets
function calculateUnion(setA, setB) {
  let union = new Set(setA);
  setB.forEach((setB) => {
    union.add(setB);
  });
  return union;
}

// Function to calculate intersection of sets
function calculateIntersection(setA, setB) {
  let intersection = new Set([...setA].filter((element) => setB.has(element)));
  return intersection;
}

// Function to calculate difference of sets
function calculateDifference(setA, setB) {
  let difference = new Set([...setA].filter((element) => !setB.has(element)));
  return difference;
}

// Function to display explanation of set operation
function displaySetsExplanation(explanation) {
  let explanationSection = document.getElementById("setsExplanationSection");
  explanationSection.innerHTML = `<p>${explanation}</p>`;
}
