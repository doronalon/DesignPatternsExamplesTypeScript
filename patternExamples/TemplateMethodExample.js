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
var TemplateMethodExample;
(function (TemplateMethodExample) {
    var Account // context
     = /** @class */ (function () {
        function Account(amount) {
            this.amount = amount;
            this.cashRemoved = 0;
        }
        Account.prototype.withdraw = function (withdrawlAmount) {
            if (this.canWithdraw(withdrawlAmount)) {
                this.amount = this.amount - withdrawlAmount;
                this.cashRemoved = this.cashRemoved + withdrawlAmount;
            }
        };
        Account.prototype.print = function () {
            console.log("Account contains " + this.amount + "$.  Cash removed = " + this.cashRemoved);
        };
        return Account;
    }());
    var CheckingAccount = /** @class */ (function (_super) {
        __extends(CheckingAccount, _super);
        function CheckingAccount(amount) {
            return _super.call(this, amount) || this;
        }
        CheckingAccount.prototype.canWithdraw = function (withdrawlAmount) {
            return true;
        };
        return CheckingAccount;
    }(Account));
    var SavingsAccount = /** @class */ (function (_super) {
        __extends(SavingsAccount, _super);
        function SavingsAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SavingsAccount.prototype.canWithdraw = function (withdrawlAmount) {
            if (withdrawlAmount <= this.amount)
                return true;
            else
                return false;
        };
        return SavingsAccount;
    }(Account));
    function demoUseOfTemplateMethod() {
        console.log("Withdrawing 60 from checking account.");
        var checkingAccount = new CheckingAccount(50);
        checkingAccount.withdraw(60);
        checkingAccount.print();
        console.log("Withdrawing 60 from savings account.");
        var savingsAccount = new SavingsAccount(50);
        savingsAccount.withdraw(60);
        savingsAccount.print();
    }
    TemplateMethodExample.demoUseOfTemplateMethod = demoUseOfTemplateMethod;
})(TemplateMethodExample || (TemplateMethodExample = {}));
TemplateMethodExample.demoUseOfTemplateMethod();
//# sourceMappingURL=TemplateMethodExample.js.map