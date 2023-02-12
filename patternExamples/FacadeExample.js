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
var FacadeExample;
(function (FacadeExample) {
    var Builder = /** @class */ (function () {
        function Builder() {
            this.numberList = new NumberList();
        }
        Builder.prototype.getProduct = function () {
            return this.numberList;
        };
        return Builder;
    }());
    var AscendingBuilder = /** @class */ (function (_super) {
        __extends(AscendingBuilder, _super);
        function AscendingBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AscendingBuilder.prototype.buildNumber = function (i) {
            this.numberList.addToBack(i);
        };
        return AscendingBuilder;
    }(Builder));
    var DescendingBuilder = /** @class */ (function (_super) {
        __extends(DescendingBuilder, _super);
        function DescendingBuilder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DescendingBuilder.prototype.buildNumber = function (i) {
            this.numberList.addToFront(i);
        };
        return DescendingBuilder;
    }(Builder));
    var NumberList = /** @class */ (function () {
        function NumberList() {
            this.numberList = [];
        }
        NumberList.prototype.addToBack = function (num) {
            this.numberList.push(num);
        };
        NumberList.prototype.addToFront = function (num) {
            this.numberList.unshift(num);
        };
        NumberList.prototype.getBegin = function () {
            return this.numberList[Symbol.iterator]();
        };
        return NumberList;
    }());
    var NumberListPrinter = /** @class */ (function () {
        function NumberListPrinter() {
        }
        NumberListPrinter.prototype.print = function (list) {
            var iter = list.getBegin();
            var result = iter.next();
            while (!result.done) {
                process.stdout.write((result.value + this.separator));
                result = iter.next();
            }
            process.stdout.write("\n");
        };
        NumberListPrinter.prototype.setSeparator = function (separator) {
            this.separator = separator;
        };
        return NumberListPrinter;
    }());
    var SequentialNumberListFacade = /** @class */ (function () {
        function SequentialNumberListFacade() {
        }
        SequentialNumberListFacade.createDescendingNumberList = function () {
            var builder = new DescendingBuilder();
            for (var i = 0; (i < 10); i++) {
                builder.buildNumber(i);
            }
            return builder.getProduct();
        };
        SequentialNumberListFacade.printNumberList = function (numberList) {
            var printer = new NumberListPrinter();
            printer.setSeparator("-");
            printer.print(numberList);
        };
        return SequentialNumberListFacade;
    }());
    function demoUseOfFacade() {
        var numberList = SequentialNumberListFacade.createDescendingNumberList();
        SequentialNumberListFacade.printNumberList(numberList);
    }
    FacadeExample.demoUseOfFacade = demoUseOfFacade;
})(FacadeExample || (FacadeExample = {}));
FacadeExample.demoUseOfFacade();
//# sourceMappingURL=FacadeExample.js.map