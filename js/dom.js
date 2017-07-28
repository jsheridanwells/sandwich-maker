
let options = Array.from(document.getElementsByTagName('option'));
let ingredientsList = document.getElementById('ingredients-list');
let totalPrice = document.getElementById('total-price');

//listen for ingredients selected
for (let i = 0; i < options.length; i++) {
	options[i].addEventListener('click', function(){
		let value = this.value;
		//check to see if it is meat, bread, cheese, etc. 
	});
}


//get total list of ingredients
//use for each to print to the page

//get total price
//print total price to the price field.



// 1.  when the user selects an ingredient
//   1.1 capture the name of the ingredient
//   1.2 compare the name of the ingredient to its price
//   1.3 add price of the ingredient to the total price
//   1.3 print the name of the ingredient in an unordered list
//   1.4 print the total to the page.