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
var FactoryMethodExample;
(function (FactoryMethodExample) {
    var Temperature = /** @class */ (function () {
        function Temperature() {
        }
        Temperature.prototype.setValue = function (t) {
            this.temperature = t;
        };
        return Temperature;
    }());
    var Farenheit = /** @class */ (function (_super) {
        __extends(Farenheit, _super);
        function Farenheit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //  concrete product
        Farenheit.prototype.print = function () {
            process.stdout.write((this.temperature + "F"));
        };
        return Farenheit;
    }(Temperature));
    var Celcius = /** @class */ (function (_super) {
        __extends(Celcius, _super);
        function Celcius() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Celcius.prototype.print = function () {
            process.stdout.write((this.temperature + "C"));
        };
        return Celcius;
    }(Temperature));
    var TemperatureFiller = /** @class */ (function () {
        function TemperatureFiller() {
        }
        TemperatureFiller.prototype.createTempratureVector = function () {
            var tempratures = [];
            for (var i = -5; (i < 10); i++) {
                var temprature = this.createTemprature();
                temprature.setValue(i);
                tempratures.push(temprature);
            }
            return tempratures;
        };
        return TemperatureFiller;
    }());
    var FarenheitFiller = /** @class */ (function (_super) {
        __extends(FarenheitFiller, _super);
        function FarenheitFiller() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FarenheitFiller.prototype.createTemprature = function () {
            return new Farenheit();
        };
        return FarenheitFiller;
    }(TemperatureFiller));
    var CelciusFiller = /** @class */ (function (_super) {
        __extends(CelciusFiller, _super);
        function CelciusFiller() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CelciusFiller.prototype.createTemprature = function () {
            return new Celcius();
        };
        return CelciusFiller;
    }(TemperatureFiller));
    function demoUseOfFactoryMethod() {
        var filler = new CelciusFiller();
        var tempratures = filler.createTempratureVector();
        for (var _i = 0, tempratures_1 = tempratures; _i < tempratures_1.length; _i++) {
            var temperature = tempratures_1[_i];
            temperature.print();
            process.stdout.write("\n");
        }
    }
    FactoryMethodExample.demoUseOfFactoryMethod = demoUseOfFactoryMethod;
})(FactoryMethodExample || (FactoryMethodExample = {}));
FactoryMethodExample.demoUseOfFactoryMethod();
//# sourceMappingURL=FactoryMethodExample.js.map