// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
		'ham': 1.00,
		'turkey': 1.00,
		'chicken': 2.00
	};

  // Augment the original object with another method
  maker.addMeat = (item) => {
  	return meatPrices[item];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);