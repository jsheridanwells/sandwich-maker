let checks = document.getElementsByTagName('input');

const getIngredient = () => {
	console.log("ingredient", this.name);
	return this.name;
};

for (let i = 0; i < checks.length; i++) {
	checks[i].addEventListener('click', getIngredient);
}

// 1.  when the user selects an ingredient
//   1.1 capture the name of the ingredient
//   1.2 compare the name of the ingredient to its price
//   1.3 add price of the ingredient to the total price
//   1.3 print the name of the ingredient in an unordered list
//   1.4 print the total to the page.