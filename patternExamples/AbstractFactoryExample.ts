interface TemperaturePrinter
{
    PrintTemprature(temprature: Temperature) : void;
}

interface TemperatureFactory
{

    CreateTemperature() : Temperature

    CreateTemperaturePrinter() : TemperaturePrinter
}

abstract class Temperature
{
    protected temperature: number = 0;


    public SetValue(t: number) : void 
    {
        this.temperature = t;
    }

    public GetValue() : number
    {
        return this.temperature;
    }

    public abstract GetFreezingTemperature() : number;
}

class Farenheit extends Temperature
{  // concrete product
    public GetFreezingTemperature() : number
    {
        return 32;
    }
}

class Celcius extends Temperature
{  // concrete product
    public GetFreezingTemperature() : number
    {
        return 0;
    }
}

class FarenheitPrinter implements TemperaturePrinter
{

    public PrintTemprature(temprature: Temperature): void
    {
        var tempratureVal:number = temprature.GetValue();
        console.log((tempratureVal + "F"));
        if ((tempratureVal < temprature.GetFreezingTemperature()))
        {
            console.log(" (Below Freezing)");
        }

    }
}

class CelciusPrinter implements TemperaturePrinter
{

    public PrintTemprature(temprature: Temperature): void
    {
        var tempratureVal:number = temprature.GetValue();
        console.log((tempratureVal + "C"));
        if ((tempratureVal < temprature.GetFreezingTemperature()))
        {
            console.log(" (Below Freezing)");
        }

    }
}

class FarenheitFactory implements TemperatureFactory
{

    CreateTemperature() : Temperature
    {
        return new Farenheit();
    }

    CreateTemperaturePrinter() : TemperaturePrinter
    {
        return new FarenheitPrinter();
    }
}

class CelciusFactory implements TemperatureFactory
{

    CreateTemperature() : Temperature
    {
        return new Celcius();
    }

    CreateTemperaturePrinter() : TemperaturePrinter
    {
        return new CelciusPrinter();
    }
}

class TemperatureLister
{
    public static  ListTemperatures(abstractFactory: TemperatureFactory): void
    {
        for (let i = 30; i < 40; ++i)
        {
            var temperature:Temperature = abstractFactory.CreateTemperature();
            temperature.SetValue(i);

            var  temperaturePrinter:TemperaturePrinter = abstractFactory.CreateTemperaturePrinter();
            temperaturePrinter.PrintTemprature(temperature);

            //console.log();

        }
    }
};




function clientCode() {

var  temptFactory:TemperatureFactory = new FarenheitFactory();
TemperatureLister.ListTemperatures(temptFactory);
}

console.log("Starting...")
clientCode();


