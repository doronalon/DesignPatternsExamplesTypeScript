var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Temperature = /** @class */ (function () {
    function Temperature() {
        this.temperature = 0;
    }
    Temperature.prototype.SetValue = function (t) {
        this.temperature = t;
    };
    Temperature.prototype.GetValue = function () {
        return this.temperature;
    };
    return Temperature;
}());
var Farenheit = /** @class */ (function (_super) {
    __extends(Farenheit, _super);
    function Farenheit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Farenheit.prototype.GetFreezingTemperature = function () {
        return 32;
    };
    return Farenheit;
}(Temperature));
var Celcius = /** @class */ (function (_super) {
    __extends(Celcius, _super);
    function Celcius() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Celcius.prototype.GetFreezingTemperature = function () {
        return 0;
    };
    return Celcius;
}(Temperature));
var FarenheitPrinter = /** @class */ (function () {
    function FarenheitPrinter() {
    }
    FarenheitPrinter.prototype.PrintTemprature = function (temprature) {
        var tempratureVal = temprature.GetValue();
        console.log((tempratureVal + "F"));
        if ((tempratureVal < temprature.GetFreezingTemperature())) {
            console.log(" (Below Freezing)");
        }
    };
    return FarenheitPrinter;
}());
var CelciusPrinter = /** @class */ (function () {
    function CelciusPrinter() {
    }
    CelciusPrinter.prototype.PrintTemprature = function (temprature) {
        var tempratureVal = temprature.GetValue();
        console.log((tempratureVal + "C"));
        if ((tempratureVal < temprature.GetFreezingTemperature())) {
            console.log(" (Below Freezing)");
        }
    };
    return CelciusPrinter;
}());
var FarenheitFactory = /** @class */ (function () {
    function FarenheitFactory() {
    }
    FarenheitFactory.prototype.CreateTemperature = function () {
        return new Farenheit();
    };
    FarenheitFactory.prototype.CreateTemperaturePrinter = function () {
        return new FarenheitPrinter();
    };
    return FarenheitFactory;
}());
var CelciusFactory = /** @class */ (function () {
    function CelciusFactory() {
    }
    CelciusFactory.prototype.CreateTemperature = function () {
        return new Celcius();
    };
    CelciusFactory.prototype.CreateTemperaturePrinter = function () {
        return new CelciusPrinter();
    };
    return CelciusFactory;
}());
var TemperatureLister = /** @class */ (function () {
    function TemperatureLister() {
    }
    TemperatureLister.ListTemperatures = function (abstractFactory) {
        for (var i = 30; i < 40; ++i) {
            var temperature = abstractFactory.CreateTemperature();
            temperature.SetValue(i);
            var temperaturePrinter = abstractFactory.CreateTemperaturePrinter();
            temperaturePrinter.PrintTemprature(temperature);
            //console.log();
        }
    };
    return TemperatureLister;
}());
;
function clientCode() {
    var temptFactory = new FarenheitFactory();
    TemperatureLister.ListTemperatures(temptFactory);
}
console.log("Starting...");
clientCode();
//# sourceMappingURL=AbstractFactoryExample.js.map