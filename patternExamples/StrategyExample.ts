namespace StrategyExample {
    interface OverdraftStrategy // strategy
    {

        canWithdraw(amount: number, withdrawlAmount: number): boolean;
    }

    class CheckingAccountStrategy implements OverdraftStrategy {
        canWithdraw(amount: number, withdrawlAmount: number): boolean {
            return true;
        }
    }

    class SavingsAccountStrategy implements OverdraftStrategy {
        canWithdraw(amount: number, withdrawlAmount: number): boolean {
            if (withdrawlAmount <= amount)
                return true;
            else
                return false;
        }
    }


    class Account  // context
    {

        public constructor(amount: number, strategy: OverdraftStrategy) {
            this.amount = amount;
            this.overdraftStrategy = strategy;
            this.cashRemoved = 0;
        }
        public withdraw(withdrawlAmount: number): void {
            if (this.overdraftStrategy.canWithdraw(this.amount, withdrawlAmount)) {
                this.amount = this.amount - withdrawlAmount;
                this.cashRemoved = this.cashRemoved + withdrawlAmount;
            }
        }
        public print(): void {
            console.log("Account contains " + this.amount + "$.  Cash removed = " + this.cashRemoved);
        }

        private amount: number;
        private cashRemoved: number;
        private overdraftStrategy: OverdraftStrategy;
    }

    export function demoUseOfStrategy() {
        console.log("Withdrawing 60 from checking account.")
        let checkingAccount: Account = new Account(50, new CheckingAccountStrategy());
        checkingAccount.withdraw(60);
        checkingAccount.print();

        console.log("Withdrawing 60 from savings account.")
        let savingsAccount: Account = new Account(50, new SavingsAccountStrategy());
        savingsAccount.withdraw(60);
        savingsAccount.print();

    }
}

StrategyExample.demoUseOfStrategy()