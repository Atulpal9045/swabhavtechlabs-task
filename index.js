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

  // Add method to handle an unknown amount of numbers
  const numbers3 = "10,25";
  const expected3 = 35;
  const result3 = Add(numbers3);
  console.log(
    result3 === expected3 ? "Test Case 4 Passed" : "Test Case 4 Failed"
  );

  // Add method to handle new lines between numbers (instead of commas)
  const numbers4 = "1\n2,3";
  const expected4 = 6;
  const result4 = Add(numbers4);
  console.log(
    result4 === expected4 ? "Test Case 5 Passed" : "Test Case 5 Failed"
  );

  // Add method to handle new lines between numbers (instead of commas)
  const numbers5 = "1,\n";
  const expected5 = "Input is NOT ok";
  const result5 = Add(numbers5);
  console.log(
    result5 === expected5 ? "Test Case 6 Passed" : "Test Case 6 Failed"
  );

  // Support different delimiters
  const numbers6 = "//;\n1;2";
  const expected6 = 3;
  const result6 = Add(numbers6);
  console.log(
    result6 === expected6 ? "Test Case 7 Passed" : "Test Case 7 Failed"
  );
}

// Function implementation
function Add(numbers) {
  if (numbers === "") return 0;

  let delimiters = [",", "\n"];

  if (numbers.startsWith("//")) {
    const delimiterIndex = numbers.indexOf("\n");
    const delimiterSection = numbers.substring(2, delimiterIndex);
    delimiters = [delimiterSection];
    numbers = numbers.substring(delimiterIndex + 1);
  }

  const numberArray = numbers.split(new RegExp(delimiters.join("|")));
  let sum = 0;
  let negativeNumbers = [];
  for (const num of numberArray) {
    if (num == "") return "Input is NOT ok";
    const number = parseInt(num);
    if (number < 0) {
      negativeNumbers.push(number);
    } else {
      sum += number;
    }
  }
  if (negativeNumbers.length > 0) {
    return "Negatives not allowed";
  }
  return sum;
}

// Run the test cases
Test();
