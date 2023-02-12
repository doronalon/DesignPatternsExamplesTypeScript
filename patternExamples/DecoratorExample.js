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
var DecoratorExample;
(function (DecoratorExample) {
    var StandardIntegerList = /** @class */ (function () {
        function StandardIntegerList() {
            this.integers = [];
        }
        StandardIntegerList.prototype.addInteger = function (num) {
            this.integers.push(num);
        };
        StandardIntegerList.prototype.print = function () {
            for (var i = 0; (i < this.integers.length); i++) {
                process.stdout.write((this.integers[i] + "    "));
            }
            process.stdout.write("\n");
        };
        return StandardIntegerList;
    }());
    var IntegerListDecorator = /** @class */ (function () {
        function IntegerListDecorator(component) {
            this.component = component;
        }
        IntegerListDecorator.prototype.addInteger = function (number) {
            this.component.addInteger(number);
        };
        IntegerListDecorator.prototype.print = function () {
            this.component.print();
        };
        return IntegerListDecorator;
    }());
    var PositiveIntegerListDecorator = /** @class */ (function (_super) {
        __extends(PositiveIntegerListDecorator, _super);
        function PositiveIntegerListDecorator(component) {
            return _super.call(this, component) || this;
        }
        PositiveIntegerListDecorator.prototype.addInteger = function (number) {
            if ((number > 0)) {
                this.component.addInteger(number);
            }
            else {
                this.component.addInteger((number * -1));
            }
        };
        return PositiveIntegerListDecorator;
    }(IntegerListDecorator));
    var EvenIntegerListDecorator = /** @class */ (function (_super) {
        __extends(EvenIntegerListDecorator, _super);
        function EvenIntegerListDecorator(component) {
            var _this = _super.call(this, component) || this;
            _this.rounder = -1;
            return _this;
        }
        EvenIntegerListDecorator.prototype.addInteger = function (number) {
            if (((number % 2) == 0)) {
                this.component.addInteger(number);
            }
            else {
                this.component.addInteger((number + this.rounder));
            }
        };
        EvenIntegerListDecorator.prototype.setRoundDirectionUp = function (upDirection) {
            if (upDirection) {
                this.rounder = 1;
            }
            else {
                this.rounder = -1;
            }
        };
        return EvenIntegerListDecorator;
    }(IntegerListDecorator));
    function demoUseOfDecorator() {
        //  should print -3 -2 -1 0 1 2 3 
        var integerList1 = new StandardIntegerList();
        for (var i = -3; (i < 3); i++) {
            integerList1.addInteger(i);
        }
        integerList1.print();
        //  insert only even numbers ( round odds down )
        //  should print -4 -2 -2 0 0 2 2
        var integerList2 = new StandardIntegerList();
        var evenIntegerListdDecorator = new EvenIntegerListDecorator(integerList2);
        for (var i = -3; (i < 3); i++) {
            evenIntegerListdDecorator.addInteger(i);
        }
        evenIntegerListdDecorator.print();
        //  insert only even numbers ( round odds down ), and only positive numbers ( multiply negatives by -1 )
        //  should print 4 2 2 0 0 2 2
        var integerList3 = new StandardIntegerList();
        var positiveIntegerListDecorator = new PositiveIntegerListDecorator(integerList3);
        var evenIntegerListDecorator2 = new EvenIntegerListDecorator(positiveIntegerListDecorator);
        evenIntegerListDecorator2.setRoundDirectionUp(false);
        for (var i = -3; (i < 3); i++) {
            evenIntegerListDecorator2.addInteger(i);
        }
        evenIntegerListDecorator2.print();
    }
    DecoratorExample.demoUseOfDecorator = demoUseOfDecorator;
})(DecoratorExample || (DecoratorExample = {}));
DecoratorExample.demoUseOfDecorator();
//# sourceMappingURL=DecoratorExample.js.map