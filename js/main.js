for (i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
    i++;
  } else if (i % 3 == 0) {
    console.log("Fizz");
    i++;
  } else if (i % 5 == 0) {
    console.log("Buzz");
    i++;
  }
  console.log(i);
}
