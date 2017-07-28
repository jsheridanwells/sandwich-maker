var SandwichMaker = function() {
	var price = 0;  //hold the total price in a variable
	var ingredients = [];//hold the ingredients in an array
	return {
		addToPrice: function(myPrice) {
			price += myPrice;
		},
		getPrice: function() {   //return price and...
			return price;
		},
		getIngredients: function() {  //... ingredients to the dom
			return ingredients;
		}
	};
}();