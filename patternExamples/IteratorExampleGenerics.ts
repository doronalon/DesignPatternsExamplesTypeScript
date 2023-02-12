namespace IteratorExampleGenerics {
    
    // also check out the facade example for a demonstration of using Typescript's Symbol.iterator

    interface IntValIterator<T> {

        first();

        next();

        isDone(): boolean;

        currentItem(): T;
    }

    interface List {

        createIterator(): IntValIterator<any>;
    }
    

    
    class ArrayIntegerList implements List {

        public static dataSize: number = 10;

        constructor() {
            this.count = 0;
        }

        public addInteger(numberIn: number) {
            if ((this.count >= 9)) {
                throw new Error("list full");
            }

            this.integers[this.count] = numberIn;
            this.count++;
        }

        public removeInteger() {
            if ((this.count <= 0)) {
                throw new Error("removing from empty list");
            }

            this.count--;
        }

        public createIterator(): IntValIterator<number> {
            return new ArrayIntegerListIterator(this.integers, this.count);
        }
        
        private	integers:number[] = new Array<number>(ArrayIntegerList.dataSize);
        private count: number;
    }

    class ArrayIntegerListIterator implements IntValIterator<number> {

        public constructor(data: number[], afterEnd: number) {
            this.data = data;
            this.afterEnd = afterEnd;
            this.current = afterEnd;
        }

        public first() {
            this.current = 0;
        }

        public next() {
            this.current++;
        }

        public isDone(): boolean {
            return (this.current >= this.afterEnd);
        }

        public currentItem(): number {
            return this.data[this.current];
        }

        private current: number;

        private afterEnd: number;

        private data: number[];
    }
    
    export function demoUseOfIteratorGenerics() {
        let arrayIntegerList: ArrayIntegerList = new ArrayIntegerList();
        let iterator: IntValIterator<number>;
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
    
    function printList(iterator: IntValIterator<any>) {
        console.log("Printing List:");
        iterator.first();
        while (!iterator.isDone()) {
            console.log((iterator.currentItem() + " "));
            iterator.next();
        }

        console.log();
    }
}

IteratorExampleGenerics.demoUseOfIteratorGenerics()