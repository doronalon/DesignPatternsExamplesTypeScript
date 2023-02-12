var StrategyExample;
(function (StrategyExample) {
    var CheckingAccountStrategy = /** @class */ (function () {
        function CheckingAccountStrategy() {
        }
        CheckingAccountStrategy.prototype.canWithdraw = function (amount, withdrawlAmount) {
            return true;
        };
        return CheckingAccountStrategy;
    }());
    var SavingsAccountStrategy = /** @class */ (function () {
        function SavingsAccountStrategy() {
        }
        SavingsAccountStrategy.prototype.canWithdraw = function (amount, withdrawlAmount) {
            if (withdrawlAmount <= amount)
                return true;
            else
                return false;
        };
        return SavingsAccountStrategy;
    }());
    var Account // context
     = /** @class */ (function () {
        function Account(amount, strategy) {
            this.amount = amount;
            this.overdraftStrategy = strategy;
            this.cashRemoved = 0;
        }
        Account.prototype.withdraw = function (withdrawlAmount) {
            if (this.overdraftStrategy.canWithdraw(this.amount, withdrawlAmount)) {
                this.amount = this.amount - withdrawlAmount;
                this.cashRemoved = this.cashRemoved + withdrawlAmount;
            }
        };
        Account.prototype.print = function () {
            console.log("Account contains " + this.amount + "$.  Cash removed = " + this.cashRemoved);
        };
        return Account;
    }());
    function demoUseOfStrategy() {
        console.log("Withdrawing 60 from checking account.");
        var checkingAccount = new Account(50, new CheckingAccountStrategy());
        checkingAccount.withdraw(60);
        checkingAccount.print();
        console.log("Withdrawing 60 from savings account.");
        var savingsAccount = new Account(50, new SavingsAccountStrategy());
        savingsAccount.withdraw(60);
        savingsAccount.print();
    }
    StrategyExample.demoUseOfStrategy = demoUseOfStrategy;
})(StrategyExample || (StrategyExample = {}));
StrategyExample.demoUseOfStrategy();
//# sourceMappingURL=StrategyExample.js.map