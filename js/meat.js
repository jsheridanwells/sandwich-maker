// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    'Ham': 1.00,
    'Turkey': 1.50,
    'Chicken': 2.00
  };

  // Augment the original object with another method
  maker.addMeat = function(selectedTopping) {
    console.log('meatprice', meatPrices[selectedTopping]);
    return meatPrices[selectedTopping];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});