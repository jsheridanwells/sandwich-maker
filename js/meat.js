var SandwichMaker = function(maker) {
  //store ingredients and prices as key:value pairs
  var meats = {
    'ham': 1,
    'turkey': 1.5,
    'chicken': 1
  };

  //getter function to pass prices to totalPrice variable
  //getter function to pass items to the ingredients array
  maker.addMeat = function (meat) {
      let meatPrice = meats[meat];
      SandwichMaker.addToPrice(price);
  };
  return maker;
}(SandwichMaker);
