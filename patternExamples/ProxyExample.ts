namespace ProxyExample {

    interface IDollarAmount {

        getDollars(): number;

        getCents(): number;

        setDollars(dollars: number);

        setCents(cents: number);

        print();
    }

    class DollarAmount implements IDollarAmount {

        public constructor() {
            this.dollars = 0;
            this.cents = 0;
        }

        public getDollars(): number {
            return this.dollars;
        }

        public getCents(): number {
            return this.cents;
        }

        public setDollars(dollars: number) {
            this.dollars = dollars;
        }

        public setCents(cents: number) {
            this.cents = cents;
        }

        public print() {
            process.stdout.write(("Amount = " + (this.dollars + (" dollars " + (this.cents + " cents ")))));
        }

        private dollars: number;

        private cents: number;
    }

    class DollarPrinter {

        public static incrementAndPrintDollar(dollarAmount: IDollarAmount) {
            dollarAmount.setCents((dollarAmount.getCents() + 1));
            dollarAmount.print();
            console.log();
        }
    }

    class BufferPersistedDollarAmount implements IDollarAmount {

        public getDollars(): number {
            return this.realDollarAmount.getDollars();
        }

        public getCents(): number {
            return this.realDollarAmount.getCents();
        }

        public setDollars(dollars: number) {
            this.buffer[0] = dollars; //  persist
            this.realDollarAmount.setDollars(dollars);
        }

        public setCents(cents: number) {
            this.buffer[1] = cents; //  persist
            this.realDollarAmount.setCents(cents);
        }

        public print() {
            this.realDollarAmount.print();
        }

        constructor(buffer: number[], realDollarAmount: DollarAmount) {
            this.buffer = buffer;
            this.realDollarAmount = realDollarAmount;
            this.setCents(this.realDollarAmount.getCents());
            this.setDollars(this.realDollarAmount.getDollars());
        }

        private realDollarAmount: DollarAmount;

        private buffer: number[];
    }


    export function demoUseOfProxy() {
        //  Create a regular dollar object, increment and print it
        let dollarAmount: DollarAmount = new DollarAmount();
        dollarAmount.setDollars(18);
        dollarAmount.setCents(50);
        DollarPrinter.incrementAndPrintDollar(dollarAmount);
        //  Create a buffered dollar proxy on top of the regular object,
        //  increment it , print it
        let buffer: number[] = [0, 0];
        let bufferPersistedDollarAmount: IDollarAmount = new BufferPersistedDollarAmount(buffer, dollarAmount);
        DollarPrinter.incrementAndPrintDollar(bufferPersistedDollarAmount);
        //  Show that the buffer is a backup of the DollarObject
        console.log(("Buffer[0] = " + buffer[0]));
        console.log(("Buffer[1] = " + buffer[1]));
        console.log(("Original Object: Amount =  "
            + (dollarAmount.getDollars() + ("." + dollarAmount.getCents()))));
        bufferPersistedDollarAmount.setCents(23);
        console.log(("Original Object: Amount =  "
            + (dollarAmount.getDollars() + ("." + dollarAmount.getCents()))));
        console.log(("Buffer[0] = " + buffer[0]));
        console.log(("Buffer[1] = " + buffer[1]));
    }
}

ProxyExample.demoUseOfProxy()