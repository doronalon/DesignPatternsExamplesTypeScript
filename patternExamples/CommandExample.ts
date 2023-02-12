

interface MenuCommand {
    execute();
}

class MenuItem {

    public constructor(description: String, command: MenuCommand) {
        this.description = description;
        this.command = command;
    }

    getTitle(): String {
        return this.description;
    }

    select() {
        this.command.execute();
    }

    private description: String;

    private command: MenuCommand;
}

class IntegerList {

    public constructor() {
        this.counter = 1;
    }

    public addInteger() {
        this.integers.push(this.counter++);
    }

    public deleteInteger() {
        this.integers.pop();
    }

    public reset() {
        this.integers = [];
    }

    public print() {
        for (let i: number = 0; (i < this.integers.length); i++) {
            process.stdout.write((this.integers[i] + " "));
        }

        process.stdout.write("\n");
    }

    private counter: number;

    private integers: Array<number> = [];
}

class AddNumberCommand implements MenuCommand {

    public constructor(target: IntegerList) {
        this.target = target;
    }

    public execute() {
        this.target.addInteger();
    }

    private target: IntegerList;
}

class RemoveNumberCommand implements MenuCommand {

    public constructor(target: IntegerList) {
        this.target = target;
    }

    public execute() {
        this.target.deleteInteger();
    }

    private target: IntegerList;
}

class PrintNumbersCommand implements MenuCommand {

    public constructor(target: IntegerList) {
        this.target = target;
    }

    public execute() {
        this.target.print();
    }

    private target: IntegerList;
}

function demoUseOfCommand() {
    let integerList: IntegerList = new IntegerList();
    let addNumberCommand: AddNumberCommand = new AddNumberCommand(integerList);
    let removeNumberCommand: RemoveNumberCommand = new RemoveNumberCommand(integerList);
    let printNumbersCommand: PrintNumbersCommand = new PrintNumbersCommand(integerList);
    let menu: Array<MenuItem> = [];
    menu.push(new MenuItem("Add", addNumberCommand));
    menu.push(new MenuItem("Remove", removeNumberCommand));
    menu.push(new MenuItem("Print", printNumbersCommand));

    // hackey recursion based input loop until I convert it to promise/async

    const readline = require('readline')

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    var waitForUserInput = function () {
        for (let i: number = 0; (i < menu.length); i++) {
            console.log((i + (".  " + (menu[i].getTitle() + "\n"))));
        }
        rl.question("Select menu item to click: ", function (answer) {
            if (answer == "exit") {
                rl.close();
            } else {
                menu[answer].select();
                waitForUserInput();
            }
        });
    }

    waitForUserInput();

}


console.log("Starting...")
demoUseOfCommand();
//rl.close();