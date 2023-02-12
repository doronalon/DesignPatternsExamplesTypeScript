var MenuItem = /** @class */ (function () {
    function MenuItem(description, command) {
        this.description = description;
        this.command = command;
    }
    MenuItem.prototype.getTitle = function () {
        return this.description;
    };
    MenuItem.prototype.select = function () {
        this.command.execute();
    };
    return MenuItem;
}());
var IntegerList = /** @class */ (function () {
    function IntegerList() {
        this.integers = [];
        this.counter = 1;
    }
    IntegerList.prototype.addInteger = function () {
        this.integers.push(this.counter++);
    };
    IntegerList.prototype.deleteInteger = function () {
        this.integers.pop();
    };
    IntegerList.prototype.reset = function () {
        this.integers = [];
    };
    IntegerList.prototype.print = function () {
        for (var i = 0; (i < this.integers.length); i++) {
            process.stdout.write((this.integers[i] + " "));
        }
        process.stdout.write("\n");
    };
    return IntegerList;
}());
var AddNumberCommand = /** @class */ (function () {
    function AddNumberCommand(target) {
        this.target = target;
    }
    AddNumberCommand.prototype.execute = function () {
        this.target.addInteger();
    };
    return AddNumberCommand;
}());
var RemoveNumberCommand = /** @class */ (function () {
    function RemoveNumberCommand(target) {
        this.target = target;
    }
    RemoveNumberCommand.prototype.execute = function () {
        this.target.deleteInteger();
    };
    return RemoveNumberCommand;
}());
var PrintNumbersCommand = /** @class */ (function () {
    function PrintNumbersCommand(target) {
        this.target = target;
    }
    PrintNumbersCommand.prototype.execute = function () {
        this.target.print();
    };
    return PrintNumbersCommand;
}());
function demoUseOfCommand() {
    var integerList = new IntegerList();
    var addNumberCommand = new AddNumberCommand(integerList);
    var removeNumberCommand = new RemoveNumberCommand(integerList);
    var printNumbersCommand = new PrintNumbersCommand(integerList);
    var menu = [];
    menu.push(new MenuItem("Add", addNumberCommand));
    menu.push(new MenuItem("Remove", removeNumberCommand));
    menu.push(new MenuItem("Print", printNumbersCommand));
    // hackey recursion based input loop until I convert it to promise/async
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var waitForUserInput = function () {
        for (var i = 0; (i < menu.length); i++) {
            console.log((i + (".  " + (menu[i].getTitle() + "\n"))));
        }
        rl.question("Select menu item to click: ", function (answer) {
            if (answer == "exit") {
                rl.close();
            }
            else {
                menu[answer].select();
                waitForUserInput();
            }
        });
    };
    waitForUserInput();
}
console.log("Starting...");
demoUseOfCommand();
//rl.close();
//# sourceMappingURL=CommandExample.js.map