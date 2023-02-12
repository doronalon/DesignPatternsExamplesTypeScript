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
var StateExample;
(function (StateExample) {
    var IntegerList = /** @class */ (function () {
        function IntegerList() {
            this.integers = new Array();
            this.states = new Map();
            this.states.set(States.Empty, new EmptyState());
            this.states.set(States.PartiallyFull, new PartiallyFullState());
            this.states.set(States.Full, new FullState());
            this.currentState = this.states.get(States.Empty);
        }
        IntegerList.prototype.addInteger = function (numberIn) {
            this.currentState.addInteger(numberIn, this.integers);
            this.currentState = this.states.get(this.currentState.getNextState());
        };
        IntegerList.prototype.removeInteger = function () {
            this.currentState.removeInteger(this.integers);
            this.currentState = this.states.get(this.currentState.getNextState());
        };
        IntegerList.prototype.print = function () {
            for (var i = 0; (i < this.integers.length); i++) {
                console.log(this.integers[i] + " ");
            }
        };
        return IntegerList;
    }());
    var States;
    (function (States) {
        States[States["Empty"] = 0] = "Empty";
        States[States["PartiallyFull"] = 1] = "PartiallyFull";
        States[States["Full"] = 2] = "Full";
    })(States = StateExample.States || (StateExample.States = {}));
    var IntegerListState = /** @class */ (function () {
        function IntegerListState() {
        }
        IntegerListState.prototype.getNextState = function () {
            return this.nextState;
        };
        return IntegerListState;
    }());
    var EmptyState = /** @class */ (function (_super) {
        __extends(EmptyState, _super);
        function EmptyState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmptyState.prototype.addInteger = function (number, integers) {
            integers.push(number);
            this.nextState = States.PartiallyFull;
        };
        EmptyState.prototype.removeInteger = function (integers) {
            this.nextState = States.Empty;
        };
        return EmptyState;
    }(IntegerListState));
    var PartiallyFullState = /** @class */ (function (_super) {
        __extends(PartiallyFullState, _super);
        function PartiallyFullState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PartiallyFullState.prototype.addInteger = function (number, integers) {
            integers.push(number);
            if ((integers.length < PartiallyFullState.maxIntegerListSize)) {
                this.nextState = States.PartiallyFull;
            }
            else {
                this.nextState = States.Full;
            }
        };
        PartiallyFullState.prototype.removeInteger = function (integers) {
            integers.pop();
            if (integers.length == 0) {
                this.nextState = States.Empty;
            }
            else {
                this.nextState = States.PartiallyFull;
            }
        };
        PartiallyFullState.maxIntegerListSize = 5;
        return PartiallyFullState;
    }(IntegerListState));
    var FullState = /** @class */ (function (_super) {
        __extends(FullState, _super);
        function FullState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FullState.prototype.addInteger = function (number, integers) {
            this.nextState = States.Full;
        };
        FullState.prototype.removeInteger = function (integers) {
            integers.pop();
            this.nextState = States.PartiallyFull;
        };
        return FullState;
    }(IntegerListState));
    function demoUseOfState() {
        var integerListWithState = new IntegerList();
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
    StateExample.demoUseOfState = demoUseOfState;
})(StateExample || (StateExample = {}));
StateExample.demoUseOfState();
//# sourceMappingURL=StateExample.js.map