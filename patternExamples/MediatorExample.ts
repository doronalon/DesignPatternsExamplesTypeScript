namespace MediatorExample {

    interface IColleague {
    }
    interface INumberMediator {

        registerOnesProducer(onesProducer: SingleDigitProducer);

        registerTensProducer(tensProducer: DoubleDigitProducer);

        registerHundredsProducer(hundredsProducer: TripleDigitProducer);

        singleDigitProduced(count: number);

        doubleDigitProduced(count: number);

        tripleDigitProduced(count: number);
    }
    class SingleDigitProducer implements IColleague {

        count: number = 0;

        private director: INumberMediator;

        public constructor(director: INumberMediator) {
            this.director = director;
            this.director.registerOnesProducer(this);
        }

        public getNextOne(): number {
            this.count++;
            this.director.singleDigitProduced(this.count);
            return this.count;
        }

        public setNextSingleDigitToProduce(count: number) {
            this.count = count;
        }
    }
    class DoubleDigitProducer implements IColleague {

        count: number = 0;

        private director: INumberMediator;

        public constructor(director: INumberMediator) {
            this.director = director;
            this.director.registerTensProducer(this);
        }

        public getNextTen(): number {
            this.count += 10;
            this.director.doubleDigitProduced(this.count);
            return this.count;
        }

        public setNextDoubleDigitToProduce(i: number) {
            this.count = i;
        }
    }
    class TripleDigitProducer implements IColleague {

        count: number = 0;

        private director: INumberMediator;

        public constructor(director: INumberMediator) {
            this.director = director;
            this.director.registerHundredsProducer(this);
        }

        public getNextHundred(): number {
            this.count += 100;
            this.director.tripleDigitProduced(this.count);
            return this.count;
        }

        public setNextTripleDigitToProduce(i: number) {
            this.count = i;
        }
    }
    class NumberDirector implements INumberMediator {

        private singleDigitProducer: SingleDigitProducer;

        private doubleDigitProducer: DoubleDigitProducer;

        private tripleDigitProducer: TripleDigitProducer;

        public registerOnesProducer(onesProducer: SingleDigitProducer) {
            this.singleDigitProducer = onesProducer;
        }

        public registerTensProducer(tensProducer: DoubleDigitProducer) {
            this.doubleDigitProducer = tensProducer;
        }

        public registerHundredsProducer(hundredsProducer: TripleDigitProducer) {
            this.tripleDigitProducer = hundredsProducer;
        }

        public singleDigitProduced(count: number) {
            this.updateAllProducers(count);
        }

        public doubleDigitProduced(count: number) {
            this.updateAllProducers((count / 10));
        }

        public tripleDigitProduced(count: number) {
            this.updateAllProducers((count / 100));
        }

        private updateAllProducers(count: number) {
            this.singleDigitProducer.setNextSingleDigitToProduce(count);
            this.doubleDigitProducer.setNextDoubleDigitToProduce((count * 10));
            this.tripleDigitProducer.setNextTripleDigitToProduce((count * 100));
        }
    }

    export  function demoUseOfMediator() {
        let director: NumberDirector = new NumberDirector();
        let onesProducer: SingleDigitProducer = new SingleDigitProducer(director);
        let tensProducer: DoubleDigitProducer = new DoubleDigitProducer(director);
        let hundredsProducer: TripleDigitProducer = new TripleDigitProducer(director);
        console.log(onesProducer.getNextOne());
        console.log(tensProducer.getNextTen());
        console.log(onesProducer.getNextOne());
        console.log(onesProducer.getNextOne());
        console.log(hundredsProducer.getNextHundred());
    }
}
    
MediatorExample.demoUseOfMediator()