const domContainerEl = document.getElementById("container");
const unorderedListEL = document.createElement("ul");
domContainerEl.append(unorderedListEL);

for (let i = 1; i <= 100; i++) {
  const listItem = document.createElement("li");
  unorderedListEL.append(listItem);

  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz");
    listItem.innerHTML = "FizzBuzz";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    listItem.innerHTML = "Fizz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    listItem.innerHTML = "Buzz";
  } else {
    console.log(i);
    listItem.innerHTML = i;
  }
}
