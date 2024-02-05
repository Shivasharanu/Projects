let firstName = prompt("Hello and Welcome. please enter your first name:");
let lastName = prompt("please enter your last name:");
let age = parseFloat(prompt("How old are you ?"));
let height = parseFloat(prompt("How tall are you in centimeters ?"));
let pet = prompt("What is the name of your pet ?");
alert("Thank you so much for the information.");

let l = pet.length;
if (
  firstName.toLowerCase()[0] == lastName.toLowerCase()[0] &&
  age > 20 &&
  age < 30 &&
  height >= 170 &&
  pet[l - 1].toLowerCase() == "y"
) {
  console.log("Welcome comrade! You've passed the Spy Test");
} else {
  console.log("Sorry, nothing to see here.");
}
