var ObserverExample;
(function (ObserverExample) {
    var IntegerList = /** @class */ (function () {
        function IntegerList() {
            this.integers = new Array();
            this.observers = new Array();
        }
        IntegerList.prototype.addInteger = function (numberIn) {
            this.integers.push(numberIn);
            this.notifyObserversNumberAdded(numberIn);
        };
        IntegerList.prototype.registerObserverForAddEvent = function (observer) {
            this.observers.push(observer);
        };
        IntegerList.prototype.notifyObserversNumberAdded = function (number) {
            for (var i = 0; (i < this.observers.length); i++) {
                this.observers[i].newNumberAdded(number);
            }
        };
        IntegerList.prototype.print = function () {
            for (var i = 0; (i < this.integers.length); i++) {
                process.stdout.write("" + this.integers[i] + " ");
            }
            process.stdout.write("\n");
        };
        IntegerList.prototype.removeObserver = function (observer) {
            // remove the specified observer from the list
            this.observers.splice(this.observers.indexOf(observer), 1);
        };
        return IntegerList;
    }());
    var BackupIntegerList = /** @class */ (function () {
        function BackupIntegerList() {
            this.backup = new IntegerList();
        }
        BackupIntegerList.prototype.newNumberAdded = function (number) {
            this.backup.addInteger(number);
        };
        BackupIntegerList.prototype.printBackup = function () {
            this.backup.print();
        };
        return BackupIntegerList;
    }());
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.prototype.newNumberAdded = function (number) {
            process.stdout.write(("New number added = " + number + "\n"));
        };
        return Logger;
    }());
    function demoUseOfObserver() {
        var integerList = new IntegerList();
        var logger = new Logger();
        var backup = new BackupIntegerList();
        integerList.registerObserverForAddEvent(logger);
        integerList.registerObserverForAddEvent(backup);
        integerList.addInteger(1);
        integerList.addInteger(5);
        process.stdout.write("Original list = ");
        integerList.print();
        process.stdout.write("Backup list = ");
        backup.printBackup();
        process.stdout.write("Removing backup observer\n");
        integerList.removeObserver(backup);
        integerList.addInteger(6);
        process.stdout.write("Original list = ");
        integerList.print();
        process.stdout.write("Backup list = ");
        backup.printBackup();
    }
    ObserverExample.demoUseOfObserver = demoUseOfObserver;
})(ObserverExample || (ObserverExample = {}));
ObserverExample.demoUseOfObserver();
//# sourceMappingURL=ObserverExample.js.map