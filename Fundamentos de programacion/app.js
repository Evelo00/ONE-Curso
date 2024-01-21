let numRandom = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let num1 = 0;
console.log(numRandom);

while (num1 != numRandom) {
  num1 = prompt("Enter a number please : ");
  attempts++;
}
console.log("You win in " + attempts + " attempts");
