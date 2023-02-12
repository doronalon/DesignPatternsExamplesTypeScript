namespace InterpreterExample {
    
    export interface Expression {
        
        evaluate(): number;
    }
    
    export class Constant implements Expression {
        
        private value: number;
        
        public constructor (d: number) {
            this.value = d;
        }
        
        public evaluate(): number {
            return this.value;
        }
    }
    
    export class Variable implements Expression {
        
        private name: String;
        
        private value: number;
        
        public constructor (name: String) {
            this.name = this.name;
        }
        
        public setValue(d: number) {
            this.value = d;
        }
        
        public evaluate(): number {
            return this.value;
        }
    }
    
    export class DivideExpression implements Expression {
        
        private leftSide: Expression;
        
        private rightSide: Expression;
        
        public constructor (a: Expression, b: Expression) {
            this.leftSide = a;
            this.rightSide = b;
        }
        
        public evaluate(): number {
            return (this.leftSide.evaluate() / this.rightSide.evaluate());
        }
    }
    
    export class PlusExpression implements Expression {
        
        private leftSide: Expression;
        
        private rightSide: Expression;
        
        public constructor (a: Expression, b: Expression) {
            this.leftSide = a;
            this.rightSide = b;
        }
        
        public evaluate(): number {
            return (this.leftSide.evaluate() + this.rightSide.evaluate());
        }
    }
    
    export class TimesExpression implements Expression {
        
        private leftSide: Expression;
        
        private rightSide: Expression;
        
        public constructor (a: Expression, b: Expression) {
            this.leftSide = a;
            this.rightSide = b;
        }
        
        public evaluate(): number {
            return (this.leftSide.evaluate() * this.rightSide.evaluate());
        }
    }

    export function demoUseOfInterpreter() {
        let a: Variable = new Variable("A");
        let b: Variable = new Variable("B");
        let c: Variable = new Variable("C");
        a.setValue(4);
        b.setValue(3);
        c.setValue(8);
        let aPlusB: PlusExpression = new PlusExpression(a, b);
        let cTimesInner: TimesExpression = new TimesExpression(aPlusB, c);
        let k: Constant = new Constant(2);
        let formula: Expression = new DivideExpression(cTimesInner, k);
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
    
}

InterpreterExample.demoUseOfInterpreter()