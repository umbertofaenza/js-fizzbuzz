const domRowEl = document.getElementById("target-row");

for (let i = 1; i <= 100; i++) {
  const colEl = document.createElement("div");
  domRowEl.append(colEl);
  const valueBoxEl = document.createElement("div");
  colEl.append(valueBoxEl);

  colEl.classList.add("col");
  valueBoxEl.classList.add("value-box");

  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
    valueBoxEl.innerHTML = "FizzBuzz";
    valueBoxEl.classList.add("fizz-buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
    valueBoxEl.innerHTML = "Fizz";
    valueBoxEl.classList.add("fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
    valueBoxEl.innerHTML = "Buzz";
    valueBoxEl.classList.add("buzz");
  } else {
    console.log(i);
    valueBoxEl.innerHTML = i;
  }
}
