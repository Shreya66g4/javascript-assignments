function greet(name, binaryNumber) {
    if (binaryNumber === 1) {
      return "Hello " + name;
    } else if (binaryNumber === 0) {
      return "Bye " + name;
    } else {
      return "Invalid binary number. Please provide either 0 or 1.";
    }
  }

console.log(greet("John", 1)); // Output: Hello John
console.log(greet("Jane", 0)); // Output: Bye Jane
console.log(greet("Alice", 2)); // Output: Invalid binary number. Please provide either 0 or 1.