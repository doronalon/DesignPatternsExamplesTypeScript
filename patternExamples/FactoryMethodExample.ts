namespace FactoryMethodExample {

    abstract class Temperature {

        protected temperature: number;

        public setValue(t: number) {
            this.temperature = t;
        }
        public abstract print();
    }

    class Farenheit extends Temperature {

        //  concrete product
        public print() {
            process.stdout.write((this.temperature + "F"));
        }
    }

    class Celcius extends Temperature {

        public print() {
            process.stdout.write((this.temperature + "C"));
        }
    }

    abstract class TemperatureFiller {

        public createTempratureVector(): Array<Temperature> {
            let tempratures: Array<Temperature> = [];
            for (let i: number = -5; (i < 10); i++) {
                let temprature: Temperature = this.createTemprature();
                temprature.setValue(i);
                tempratures.push(temprature);
            }

            return tempratures;
        }

        protected abstract createTemprature(): Temperature;
    }

    class FarenheitFiller extends TemperatureFiller {

        public createTemprature(): Temperature {
            return new Farenheit();
        }
    }
    class CelciusFiller extends TemperatureFiller {

        protected createTemprature(): Temperature {
            return new Celcius();
        }
    }


    export function demoUseOfFactoryMethod() {
        let filler: CelciusFiller = new CelciusFiller();
        let tempratures: Array<Temperature> = filler.createTempratureVector();
        for (let temperature of tempratures) {
            temperature.print();
            process.stdout.write("\n");
        }

    }
}

FactoryMethodExample.demoUseOfFactoryMethod();