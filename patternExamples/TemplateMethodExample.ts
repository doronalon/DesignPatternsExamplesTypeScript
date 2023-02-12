namespace TemplateMethodExample {

    abstract class Account  // context
    {
        abstract canWithdraw(withdrawlAmount: number): boolean;

        public constructor(amount: number) {
            this.amount = amount;
            this.cashRemoved = 0;
        }
        public withdraw(withdrawlAmount: number): void {
            if (this.canWithdraw(withdrawlAmount)) {
                this.amount = this.amount - withdrawlAmount;
                this.cashRemoved = this.cashRemoved + withdrawlAmount;
            }
        }
        public print(): void {
            console.log("Account contains " + this.amount + "$.  Cash removed = " + this.cashRemoved);
        }

        protected amount: number;
        private cashRemoved: number;
    }

    class CheckingAccount extends Account {
        constructor(amount:number) {
            super(amount);
        }
        canWithdraw(withdrawlAmount: number): boolean {
            return true;
        }
    }

    class SavingsAccount extends Account {
        canWithdraw(withdrawlAmount: number): boolean {
            if (withdrawlAmount <= this.amount)
                return true;
            else
                return false;
        }
    }



    export function demoUseOfTemplateMethod() {
        console.log("Withdrawing 60 from checking account.")
        let checkingAccount: CheckingAccount = new CheckingAccount(50);
        checkingAccount.withdraw(60);
        checkingAccount.print();

        console.log("Withdrawing 60 from savings account.")
        let savingsAccount: SavingsAccount = new SavingsAccount(50);
        savingsAccount.withdraw(60);
        savingsAccount.print();

    }
}

TemplateMethodExample.demoUseOfTemplateMethod()