var MementoExample;
(function (MementoExample) {
    var IntegerList // Originator
     = /** @class */ (function () {
        function IntegerList() {
            this.integers = new Array();
            this.totalOperationsSoFar = 0;
        }
        IntegerList.prototype.addInteger = function (numberIn) {
            this.integers.push(numberIn);
            ++this.totalOperationsSoFar;
        };
        IntegerList.prototype.restore = function (memento) {
            this.integers = memento.getIntegers();
            this.totalOperationsSoFar = 0;
        };
        IntegerList.prototype.save = function () {
            return new IntegerListMemento(this.integers);
        };
        IntegerList.prototype.print = function () {
            //for (let member of this.integers)
            //    process.stdout.write(member + " ");
            this.integers.forEach(function (v) { return process.stdout.write(v + " "); });
            console.log("Total operations so far = " + this.totalOperationsSoFar);
        };
        return IntegerList;
    }());
    var IntegerListMemento = /** @class */ (function () {
        function IntegerListMemento(data) {
            this.integers = Object.assign([], data);
        }
        IntegerListMemento.prototype.getIntegers = function () {
            return this.integers;
        };
        return IntegerListMemento;
    }());
    function demoUseOfMemento() {
        var integerList = new IntegerList();
        integerList.addInteger(1);
        integerList.addInteger(2);
        integerList.addInteger(3);
        integerList.addInteger(4);
        integerList.addInteger(5);
        var memento = integerList.save();
        var integerList2 = new IntegerList();
        integerList2.restore(memento);
        // regular list
        integerList.print();
        // list created from a memento
        integerList2.print();
        // regular list again
        integerList.addInteger(6);
        integerList.print();
        // list restored from a memento
        integerList.restore(memento);
        integerList.print();
    }
    MementoExample.demoUseOfMemento = demoUseOfMemento;
})(MementoExample || (MementoExample = {}));
MementoExample.demoUseOfMemento();
//# sourceMappingURL=MementoExample.js.map