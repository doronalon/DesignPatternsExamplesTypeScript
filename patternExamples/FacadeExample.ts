namespace FacadeExample {

    abstract class Builder {

        public abstract buildNumber(i: number);

        getProduct(): NumberList {
            return this.numberList;
        }

        protected numberList: NumberList = new NumberList();
    }


    class AscendingBuilder extends Builder {

        public buildNumber(i: number) {
            this.numberList.addToBack(i);
        }
    }

    class DescendingBuilder extends Builder {

        public buildNumber(i: number) {
            this.numberList.addToFront(i);
        }
    }

    class NumberList {

        public addToBack(num: number) {
            this.numberList.push(num);
        }

        public addToFront(num: number) {
            this.numberList.unshift(num);
        }

        public getBegin(): Iterator<number> {
            return this.numberList[Symbol.iterator]()
        }

        private numberList: Array<number> = [];
    }
    class NumberListPrinter {

        public print(list: NumberList) {

            let iter: Iterator<number> = list.getBegin();
            let result = iter.next();
            while (!result.done) {
                process.stdout.write((result.value + this.separator));
                result = iter.next();
            }

            process.stdout.write("\n");
        }

        public setSeparator(separator: String) {
            this.separator = separator;
        }

        private separator: String;
    }
    class SequentialNumberListFacade {

        public static createDescendingNumberList(): NumberList {
            let builder: DescendingBuilder = new DescendingBuilder();
            for (let i: number = 0; (i < 10); i++) {
                builder.buildNumber(i);
            }

            return builder.getProduct();
        }

        static printNumberList(numberList: NumberList) {
            let printer: NumberListPrinter = new NumberListPrinter();
            printer.setSeparator("-");
            printer.print(numberList);
        }
    }


    export function demoUseOfFacade() {
        let numberList: NumberList = SequentialNumberListFacade.createDescendingNumberList();
        SequentialNumberListFacade.printNumberList(numberList);
    }

}

FacadeExample.demoUseOfFacade();