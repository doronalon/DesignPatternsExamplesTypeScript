var IteratorExampleGenerics;
(function (IteratorExampleGenerics) {
    // also check out the facade example for a demonstration of using Typescript's Symbol.iterator
    var ArrayIntegerList = /** @class */ (function () {
        function ArrayIntegerList() {
            this.integers = new Array(ArrayIntegerList.dataSize);
            this.count = 0;
        }
        ArrayIntegerList.prototype.addInteger = function (numberIn) {
            if ((this.count >= 9)) {
                throw new Error("list full");
            }
            this.integers[this.count] = numberIn;
            this.count++;
        };
        ArrayIntegerList.prototype.removeInteger = function () {
            if ((this.count <= 0)) {
                throw new Error("removing from empty list");
            }
            this.count--;
        };
        ArrayIntegerList.prototype.createIterator = function () {
            return new ArrayIntegerListIterator(this.integers, this.count);
        };
        ArrayIntegerList.dataSize = 10;
        return ArrayIntegerList;
    }());
    var ArrayIntegerListIterator = /** @class */ (function () {
        function ArrayIntegerListIterator(data, afterEnd) {
            this.data = data;
            this.afterEnd = afterEnd;
            this.current = afterEnd;
        }
        ArrayIntegerListIterator.prototype.first = function () {
            this.current = 0;
        };
        ArrayIntegerListIterator.prototype.next = function () {
            this.current++;
        };
        ArrayIntegerListIterator.prototype.isDone = function () {
            return (this.current >= this.afterEnd);
        };
        ArrayIntegerListIterator.prototype.currentItem = function () {
            return this.data[this.current];
        };
        return ArrayIntegerListIterator;
    }());
    function demoUseOfIteratorGenerics() {
        var arrayIntegerList = new ArrayIntegerList();
        var iterator;
        iterator = arrayIntegerList.createIterator();
        printList(iterator);
        arrayIntegerList.addInteger(1);
        arrayIntegerList.addInteger(2);
        arrayIntegerList.addInteger(3);
        arrayIntegerList.addInteger(4);
        arrayIntegerList.addInteger(5);
        arrayIntegerList.removeInteger();
        iterator = arrayIntegerList.createIterator();
        printList(iterator);
    }
    IteratorExampleGenerics.demoUseOfIteratorGenerics = demoUseOfIteratorGenerics;
    function printList(iterator) {
        console.log("Printing List:");
        iterator.first();
        while (!iterator.isDone()) {
            console.log((iterator.currentItem() + " "));
            iterator.next();
        }
        console.log();
    }
})(IteratorExampleGenerics || (IteratorExampleGenerics = {}));
IteratorExampleGenerics.demoUseOfIteratorGenerics();
//# sourceMappingURL=IteratorExampleGenerics.js.map