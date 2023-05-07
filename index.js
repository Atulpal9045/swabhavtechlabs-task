function Test() {
  // An empty string
  const numbers = "";
  const expected = 0;
  const result = Add(numbers);
  console.log(
    result === expected ? "Test Case 1 Passed" : "Test Case 1 Failed"
  );
}

// Function implementation
function Add(numbers) {
  if (numbers === "") return 0;

  let delimiters = [","];

  const numberArray = numbers.split(new RegExp(delimiters.join("|")));
  let sum = 0;

  for (const num of numberArray) {
    const number = parseInt(num);
    sum += number;
  }
  
  return sum;
}

// Run the test cases
Test();
