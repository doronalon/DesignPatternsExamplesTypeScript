var InterpreterExample;
(function (InterpreterExample) {
    var Constant = /** @class */ (function () {
        function Constant(d) {
            this.value = d;
        }
        Constant.prototype.evaluate = function () {
            return this.value;
        };
        return Constant;
    }());
    InterpreterExample.Constant = Constant;
    var Variable = /** @class */ (function () {
        function Variable(name) {
            this.name = this.name;
        }
        Variable.prototype.setValue = function (d) {
            this.value = d;
        };
        Variable.prototype.evaluate = function () {
            return this.value;
        };
        return Variable;
    }());
    InterpreterExample.Variable = Variable;
    var DivideExpression = /** @class */ (function () {
        function DivideExpression(a, b) {
            this.leftSide = a;
            this.rightSide = b;
        }
        DivideExpression.prototype.evaluate = function () {
            return (this.leftSide.evaluate() / this.rightSide.evaluate());
        };
        return DivideExpression;
    }());
    InterpreterExample.DivideExpression = DivideExpression;
    var PlusExpression = /** @class */ (function () {
        function PlusExpression(a, b) {
            this.leftSide = a;
            this.rightSide = b;
        }
        PlusExpression.prototype.evaluate = function () {
            return (this.leftSide.evaluate() + this.rightSide.evaluate());
        };
        return PlusExpression;
    }());
    InterpreterExample.PlusExpression = PlusExpression;
    var TimesExpression = /** @class */ (function () {
        function TimesExpression(a, b) {
            this.leftSide = a;
            this.rightSide = b;
        }
        TimesExpression.prototype.evaluate = function () {
            return (this.leftSide.evaluate() * this.rightSide.evaluate());
        };
        return TimesExpression;
    }());
    InterpreterExample.TimesExpression = TimesExpression;
    function demoUseOfInterpreter() {
        var a = new Variable("A");
        var b = new Variable("B");
        var c = new Variable("C");
        a.setValue(4);
        b.setValue(3);
        c.setValue(8);
        var aPlusB = new PlusExpression(a, b);
        var cTimesInner = new TimesExpression(aPlusB, c);
        var k = new Constant(2);
        var formula = new DivideExpression(cTimesInner, k);
        console.log(("Result of (("
            + (a.evaluate() + (" + "
                + (b.evaluate() + (" ) * "
                    + (c.evaluate() + ")/2.0 = ")))))));
        console.log(formula.evaluate());
        c.setValue(7);
        console.log(("Result of (("
            + (a.evaluate() + (" + "
                + (b.evaluate() + (" ) * "
                    + (c.evaluate() + ")/2.0 = ")))))));
        console.log(formula.evaluate());
    }
    InterpreterExample.demoUseOfInterpreter = demoUseOfInterpreter;
})(InterpreterExample || (InterpreterExample = {}));
InterpreterExample.demoUseOfInterpreter();
//# sourceMappingURL=InterpreterExample.js.map