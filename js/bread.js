{
	var breadPrices = {
		'white': 1.00,
		'wheat': 1.00,
		'rye': 2.00
	};
	breadPrices.getPrice = (item) => {
		return breadPrices[item];
	};
}