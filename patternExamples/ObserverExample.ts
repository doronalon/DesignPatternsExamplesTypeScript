namespace ObserverExample {
    interface AddEventObserver {
        newNumberAdded(numberIn: number);
    }

    class IntegerList {

        public addInteger(numberIn: number) {
            this.integers.push(numberIn);
            this.notifyObserversNumberAdded(numberIn);
        }

        public registerObserverForAddEvent(observer: AddEventObserver) {
            this.observers.push(observer);
        }

        public notifyObserversNumberAdded(number: number) {
            for (let i: number = 0; (i < this.observers.length); i++) {
                this.observers[i].newNumberAdded(number);
            }

        }

        public print() {
            for (let i: number = 0; (i < this.integers.length); i++) {
                process.stdout.write("" +this.integers[i] + " ");
            }

            process.stdout.write("\n");
        }

        private integers: Array<number> = new Array<number>();

        private observers: Array<AddEventObserver> = new Array<AddEventObserver>();

        public removeObserver(observer: AddEventObserver) {
            // remove the specified observer from the list
            this.observers.splice(this.observers.indexOf(observer), 1);
        }
    }
    class BackupIntegerList implements AddEventObserver {

        public newNumberAdded(number: number) {
            this.backup.addInteger(number);
        }

        public printBackup() {
            this.backup.print();
        }

        private backup: IntegerList = new IntegerList();
    }
    class Logger implements AddEventObserver {

        public newNumberAdded(number: number) {
            process.stdout.write(("New number added = " + number + "\n"));
        }
    }
    
    export function demoUseOfObserver() {
        let integerList: IntegerList = new IntegerList();
        let logger: Logger = new Logger();
        let backup: BackupIntegerList = new BackupIntegerList();
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
}

ObserverExample.demoUseOfObserver()