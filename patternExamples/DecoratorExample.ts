namespace DecoratorExample {

    interface IntegerList {

        addInteger(num: number): void;
        print();
    }

    class StandardIntegerList implements IntegerList {

        public addInteger(num: number): void {
            this.integers.push(num);
        }

        public print() {
            for (let i: number = 0; (i < this.integers.length); i++) {
                process.stdout.write((this.integers[i] + "    "));
            }

            process.stdout.write("\n");
        }

        private integers: Array<number> = [];
    }
    class IntegerListDecorator implements IntegerList {

        public constructor(component: IntegerList) {
            this.component = component;
        }

        public addInteger(number: number) {
            this.component.addInteger(number);
        }

        public print() {
            this.component.print();
        }

        protected component: IntegerList;
    }
    class PositiveIntegerListDecorator extends IntegerListDecorator {

        constructor(component: IntegerList) {
            super(component);
        }

        public addInteger(number: number) {
            if ((number > 0)) {
                this.component.addInteger(number);
            }
            else {
                this.component.addInteger((number * -1));
            }

        }
    }
    class EvenIntegerListDecorator extends IntegerListDecorator {

        private rounder: number = -1;

        public constructor(component: IntegerList) {
            super(component);
        }

        public addInteger(number: number) {
            if (((number % 2) == 0)) {
                this.component.addInteger(number);
            }
            else {
                this.component.addInteger((number + this.rounder));
            }

        }

        public setRoundDirectionUp(upDirection: boolean) {
            if (upDirection) {
                this.rounder = 1;
            }
            else {
                this.rounder = -1;
            }

        }
    }

   export function demoUseOfDecorator() {
        //  should print -3 -2 -1 0 1 2 3 
        let integerList1: StandardIntegerList = new StandardIntegerList();
        for (let i: number = -3; (i < 3); i++) {
            integerList1.addInteger(i);
        }

        integerList1.print();
        //  insert only even numbers ( round odds down )
        //  should print -4 -2 -2 0 0 2 2
        let integerList2: StandardIntegerList = new StandardIntegerList();
        let evenIntegerListdDecorator: EvenIntegerListDecorator = new EvenIntegerListDecorator(integerList2);
        for (let i: number = -3; (i < 3); i++) {
            evenIntegerListdDecorator.addInteger(i);
        }

        evenIntegerListdDecorator.print();
        //  insert only even numbers ( round odds down ), and only positive numbers ( multiply negatives by -1 )
        //  should print 4 2 2 0 0 2 2
        let integerList3: StandardIntegerList = new StandardIntegerList();
        let positiveIntegerListDecorator: PositiveIntegerListDecorator = new PositiveIntegerListDecorator(integerList3);
        let evenIntegerListDecorator2: EvenIntegerListDecorator = new EvenIntegerListDecorator(positiveIntegerListDecorator);
        evenIntegerListDecorator2.setRoundDirectionUp(false);
        for (let i: number = -3; (i < 3); i++) {
            evenIntegerListDecorator2.addInteger(i);
        }

        evenIntegerListDecorator2.print();
    }

}

DecoratorExample.demoUseOfDecorator();

