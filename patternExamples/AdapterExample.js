var DollarAmount = /** @class */ (function () {
    function DollarAmount(dollars, cents) {
        this.dollars = dollars;
        this.cents = cents;
    }
    DollarAmount.prototype.getDollars = function () {
        return this.dollars;
    };
    DollarAmount.prototype.getCents = function () {
        return this.cents;
    };
    return DollarAmount;
}());
var FractionalDollarAmount = /** @class */ (function () {
    function FractionalDollarAmount(dollars) {
        this.dollars = dollars;
    }
    FractionalDollarAmount.prototype.getAmount = function () {
        return this.dollars;
    };
    return FractionalDollarAmount;
}());
var AmountPrinter = /** @class */ (function () {
    function AmountPrinter() {
    }
    AmountPrinter.printAmounts = function (amounts) {
        for (var i = 0; i < amounts.length; ++i)
            console.log("Amount = " + amounts[i].getDollars() + " dollars " + amounts[i].getCents() + " cents\n");
    };
    return AmountPrinter;
}());
var DollarAdapter = /** @class */ (function () {
    function DollarAdapter(fractionalDollarAmount) {
        this.fractionalDollarAmount = fractionalDollarAmount;
    }
    DollarAdapter.prototype.getDollars = function () {
        return (Math.floor(this.fractionalDollarAmount.getAmount()));
    };
    DollarAdapter.prototype.getCents = function () {
        return (this.fractionalDollarAmount.getAmount() * 100) - this.getDollars() * 100;
    };
    return DollarAdapter;
}());
function demoUseOfAdapter() {
    var dollarAmount = new DollarAmount(19, 95);
    var fractionalDollarAmount = new FractionalDollarAmount(17.89);
    var dollarAdapter = new DollarAdapter(fractionalDollarAmount);
    var amounts = [];
    amounts.push(dollarAmount);
    amounts.push(dollarAdapter);
    // Should print 19.95 and 17.89
    console.log("Should print 19.95 and 17.89\n");
    AmountPrinter.printAmounts(amounts);
}
console.log("Starting...");
demoUseOfAdapter();
//# sourceMappingURL=AdapterExample.js.map