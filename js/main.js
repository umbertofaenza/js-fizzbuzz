const domRowEl = document.getElementById("target-row");

for (let i = 1; i <= 100; i++) {
  const colEl = document.createElement("div");
  domRowEl.append(colEl);
  const valueBoxEl = document.createElement("div");
  colEl.append(valueBoxEl);

  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
    valueBoxEl.innerHTML = "FizzBuzz";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    valueBoxEl.innerHTML = "Fizz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    valueBoxEl.innerHTML = "Buzz";
  } else {
    console.log(i);
    valueBoxEl.innerHTML = i;
  }

  colEl.classList.add("col");
  valueBoxEl.classList.add("value-box");
}
