namespace MementoExample {

    class IntegerList // Originator
    {
        public constructor() {
            this.totalOperationsSoFar = 0;
        }
        public addInteger(numberIn: number): void {
            this.integers.push(numberIn);
            ++this.totalOperationsSoFar;
        }
        public restore(memento: IntegerListMemento): void {
            this.integers = memento.getIntegers();
            this.totalOperationsSoFar = 0;
        }
        public save(): IntegerListMemento {
            return new IntegerListMemento(this.integers);
        }
        public print(): void {
            //for (let member of this.integers)
            //    process.stdout.write(member + " ");
            this.integers.forEach(v => process.stdout.write(v + " "));
            console.log("Total operations so far = " + this.totalOperationsSoFar);
        }
        private integers: Array<number> = new Array<number>();
        private totalOperationsSoFar: number;
    }

    class IntegerListMemento {
        public constructor(data: Array<number>) {
            this.integers = Object.assign([], data);
        }
        public getIntegers(): Array<number> {
            return this.integers;
        }
        private integers: Array<number>;
    }

    export function demoUseOfMemento() {

        let integerList:IntegerList = new IntegerList();
        integerList.addInteger(1);
        integerList.addInteger(2);
        integerList.addInteger(3);
        integerList.addInteger(4);
        integerList.addInteger(5);

        let memento:IntegerListMemento = integerList.save();
        let integerList2:IntegerList = new IntegerList();
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
}

MementoExample.demoUseOfMemento()
