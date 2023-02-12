var MediatorExample;
(function (MediatorExample) {
    var SingleDigitProducer = /** @class */ (function () {
        function SingleDigitProducer(director) {
            this.count = 0;
            this.director = director;
            this.director.registerOnesProducer(this);
        }
        SingleDigitProducer.prototype.getNextOne = function () {
            this.count++;
            this.director.singleDigitProduced(this.count);
            return this.count;
        };
        SingleDigitProducer.prototype.setNextSingleDigitToProduce = function (count) {
            this.count = count;
        };
        return SingleDigitProducer;
    }());
    var DoubleDigitProducer = /** @class */ (function () {
        function DoubleDigitProducer(director) {
            this.count = 0;
            this.director = director;
            this.director.registerTensProducer(this);
        }
        DoubleDigitProducer.prototype.getNextTen = function () {
            this.count += 10;
            this.director.doubleDigitProduced(this.count);
            return this.count;
        };
        DoubleDigitProducer.prototype.setNextDoubleDigitToProduce = function (i) {
            this.count = i;
        };
        return DoubleDigitProducer;
    }());
    var TripleDigitProducer = /** @class */ (function () {
        function TripleDigitProducer(director) {
            this.count = 0;
            this.director = director;
            this.director.registerHundredsProducer(this);
        }
        TripleDigitProducer.prototype.getNextHundred = function () {
            this.count += 100;
            this.director.tripleDigitProduced(this.count);
            return this.count;
        };
        TripleDigitProducer.prototype.setNextTripleDigitToProduce = function (i) {
            this.count = i;
        };
        return TripleDigitProducer;
    }());
    var NumberDirector = /** @class */ (function () {
        function NumberDirector() {
        }
        NumberDirector.prototype.registerOnesProducer = function (onesProducer) {
            this.singleDigitProducer = onesProducer;
        };
        NumberDirector.prototype.registerTensProducer = function (tensProducer) {
            this.doubleDigitProducer = tensProducer;
        };
        NumberDirector.prototype.registerHundredsProducer = function (hundredsProducer) {
            this.tripleDigitProducer = hundredsProducer;
        };
        NumberDirector.prototype.singleDigitProduced = function (count) {
            this.updateAllProducers(count);
        };
        NumberDirector.prototype.doubleDigitProduced = function (count) {
            this.updateAllProducers((count / 10));
        };
        NumberDirector.prototype.tripleDigitProduced = function (count) {
            this.updateAllProducers((count / 100));
        };
        NumberDirector.prototype.updateAllProducers = function (count) {
            this.singleDigitProducer.setNextSingleDigitToProduce(count);
            this.doubleDigitProducer.setNextDoubleDigitToProduce((count * 10));
            this.tripleDigitProducer.setNextTripleDigitToProduce((count * 100));
        };
        return NumberDirector;
    }());
    function demoUseOfMediator() {
        var director = new NumberDirector();
        var onesProducer = new SingleDigitProducer(director);
        var tensProducer = new DoubleDigitProducer(director);
        var hundredsProducer = new TripleDigitProducer(director);
        console.log(onesProducer.getNextOne());
        console.log(tensProducer.getNextTen());
        console.log(onesProducer.getNextOne());
        console.log(onesProducer.getNextOne());
        console.log(hundredsProducer.getNextHundred());
    }
    MediatorExample.demoUseOfMediator = demoUseOfMediator;
})(MediatorExample || (MediatorExample = {}));
MediatorExample.demoUseOfMediator();
//# sourceMappingURL=MediatorExample.js.map