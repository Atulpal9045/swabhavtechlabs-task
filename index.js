function Test() {
  // An empty string
  const numbers = "";
  const expected = 0;
  const result = Add(numbers);
  console.log(
    result === expected ? "Test Case 1 Passed" : "Test Case 1 Failed"
  );

  // single value string
  const numbers1 = "1";
  const expected1 = 1;
  const result1 = Add(numbers1);
  console.log(
    result1 === expected1 ? "Test Case 2 Passed" : "Test Case 2 Failed"
  );

  // Separated by commas
  const numbers2 = "1,2";
  const expected2 = 3;
  const result2 = Add(numbers2);
  console.log(
    result2 === expected2 ? "Test Case 3 Passed" : "Test Case 3 Failed"
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
