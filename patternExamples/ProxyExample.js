var ProxyExample;
(function (ProxyExample) {
    var DollarAmount = /** @class */ (function () {
        function DollarAmount() {
            this.dollars = 0;
            this.cents = 0;
        }
        DollarAmount.prototype.getDollars = function () {
            return this.dollars;
        };
        DollarAmount.prototype.getCents = function () {
            return this.cents;
        };
        DollarAmount.prototype.setDollars = function (dollars) {
            this.dollars = dollars;
        };
        DollarAmount.prototype.setCents = function (cents) {
            this.cents = cents;
        };
        DollarAmount.prototype.print = function () {
            process.stdout.write(("Amount = " + (this.dollars + (" dollars " + (this.cents + " cents ")))));
        };
        return DollarAmount;
    }());
    var DollarPrinter = /** @class */ (function () {
        function DollarPrinter() {
        }
        DollarPrinter.incrementAndPrintDollar = function (dollarAmount) {
            dollarAmount.setCents((dollarAmount.getCents() + 1));
            dollarAmount.print();
            console.log();
        };
        return DollarPrinter;
    }());
    var BufferPersistedDollarAmount = /** @class */ (function () {
        function BufferPersistedDollarAmount(buffer, realDollarAmount) {
            this.buffer = buffer;
            this.realDollarAmount = realDollarAmount;
            this.setCents(this.realDollarAmount.getCents());
            this.setDollars(this.realDollarAmount.getDollars());
        }
        BufferPersistedDollarAmount.prototype.getDollars = function () {
            return this.realDollarAmount.getDollars();
        };
        BufferPersistedDollarAmount.prototype.getCents = function () {
            return this.realDollarAmount.getCents();
        };
        BufferPersistedDollarAmount.prototype.setDollars = function (dollars) {
            this.buffer[0] = dollars; //  persist
            this.realDollarAmount.setDollars(dollars);
        };
        BufferPersistedDollarAmount.prototype.setCents = function (cents) {
            this.buffer[1] = cents; //  persist
            this.realDollarAmount.setCents(cents);
        };
        BufferPersistedDollarAmount.prototype.print = function () {
            this.realDollarAmount.print();
        };
        return BufferPersistedDollarAmount;
    }());
    function demoUseOfProxy() {
        //  Create a regular dollar object, increment and print it
        var dollarAmount = new DollarAmount();
        dollarAmount.setDollars(18);
        dollarAmount.setCents(50);
        DollarPrinter.incrementAndPrintDollar(dollarAmount);
        //  Create a buffered dollar proxy on top of the regular object,
        //  increment it , print it
        var buffer = [0, 0];
        var bufferPersistedDollarAmount = new BufferPersistedDollarAmount(buffer, dollarAmount);
        DollarPrinter.incrementAndPrintDollar(bufferPersistedDollarAmount);
        //  Show that the buffer is a backup of the DollarObject
        console.log(("Buffer[0] = " + buffer[0]));
        console.log(("Buffer[1] = " + buffer[1]));
        console.log(("Original Object: Amount =  "
            + (dollarAmount.getDollars() + ("." + dollarAmount.getCents()))));
        bufferPersistedDollarAmount.setCents(23);
        console.log(("Original Object: Amount =  "
            + (dollarAmount.getDollars() + ("." + dollarAmount.getCents()))));
        console.log(("Buffer[0] = " + buffer[0]));
        console.log(("Buffer[1] = " + buffer[1]));
    }
    ProxyExample.demoUseOfProxy = demoUseOfProxy;
})(ProxyExample || (ProxyExample = {}));
ProxyExample.demoUseOfProxy();
//# sourceMappingURL=ProxyExample.js.map