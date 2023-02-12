namespace StateExample {


    class IntegerList {

        public constructor() {
            this.states.set(States.Empty, new EmptyState());
            this.states.set(States.PartiallyFull, new PartiallyFullState());
            this.states.set(States.Full, new FullState());
            this.currentState = this.states.get(States.Empty);
        }

        public addInteger(numberIn: number) {
            this.currentState.addInteger(numberIn, this.integers);
            this.currentState = this.states.get(this.currentState.getNextState());
        }   

        public removeInteger() {
            this.currentState.removeInteger(this.integers);
            this.currentState = this.states.get(this.currentState.getNextState());
        }

        public print() {
            for (let i: number = 0; (i < this.integers.length); i++) {
                console.log(this.integers[i] + " ");
            }

        }

        private integers: Array<number> = new Array<number>();

        private states: Map<States, IntegerListState> = new Map<States, IntegerListState>();

        private currentState: IntegerListState;
    }

    export enum States {

        Empty,

        PartiallyFull,

        Full,
    }

    abstract class IntegerListState {

        public abstract addInteger(number: number, integers: Array<number>);

        public abstract removeInteger(integers: Array<number>);

        public getNextState(): States {
            return this.nextState;
        }

        protected nextState: States;
    }

    class EmptyState extends IntegerListState {

        public addInteger(number: number, integers: Array<number>) {
            integers.push(number);
            this.nextState = States.PartiallyFull;
        }

        public removeInteger(integers: Array<number>) {
            this.nextState = States.Empty;
        }
    }
    class PartiallyFullState extends IntegerListState {

        static maxIntegerListSize: number = 5;

        public addInteger(number: number, integers: Array<number>) {
            integers.push(number);
            if ((integers.length < PartiallyFullState.maxIntegerListSize)) {
                this.nextState = States.PartiallyFull;
            }
            else {
                this.nextState = States.Full;
            }

        }

        public removeInteger(integers: Array<number>) {
            integers.pop();
            if (integers.length == 0) {
                this.nextState = States.Empty;
            }
            else {
                this.nextState = States.PartiallyFull;
            }

        }
    }
    class FullState extends IntegerListState {

        public addInteger(number: number, integers: Array<number>) {
            this.nextState = States.Full;
        }

        public removeInteger(integers: Array<number>) {
            integers.pop();
            this.nextState = States.PartiallyFull;
        }
    }


    export function demoUseOfState() {
        let integerListWithState: IntegerList = new IntegerList();
        //  ignored 
        integerListWithState.removeInteger();
        integerListWithState.addInteger(1);
        integerListWithState.addInteger(2);
        integerListWithState.addInteger(3);
        integerListWithState.addInteger(4);
        integerListWithState.addInteger(5);
        //  ignored
        integerListWithState.addInteger(6);
        integerListWithState.addInteger(7);
        integerListWithState.removeInteger();
        integerListWithState.addInteger(8);
        //  ignored 
        integerListWithState.addInteger(9);
        integerListWithState.print();
    }
}

StateExample.demoUseOfState()