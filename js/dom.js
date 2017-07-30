// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

var ingredientsList = document.getElementById('ingredients-list');
var totalPrice = document.getElementById('total-price');
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/

const printIngredients = (ingredient) => {
	var li = document.createElement('li');
	li.innerText = ingredient;
	ingredientsList.appendChild(li);
}

meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  console.log("selected topping", selectedTopping);
  // Determine the price of the topping chosen
  finalSandwichPrice += SandwichMaker.addMeat(selectedTopping);
  totalPrice.innerText = '$' + finalSandwichPrice.toFixed(2);
  // Add the topping to the SandwichMaker to increase the total price
  printIngredients(selectedTopping);
});

