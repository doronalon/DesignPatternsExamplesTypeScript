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
var PurchaseRequest = /** @class */ (function () {
    function PurchaseRequest(amount, purpose) {
        this.amount = amount;
        this.purpose = purpose;
    }
    PurchaseRequest.prototype.getAmount = function () {
        return this.amount;
    };
    return PurchaseRequest;
}());
var PurchasePower = /** @class */ (function () {
    function PurchasePower() {
    }
    PurchasePower.prototype.setSuccessor = function (successor) {
        this.successor = successor;
    };
    PurchasePower.BASE = 500;
    return PurchasePower;
}());
var DirectorPPower = /** @class */ (function (_super) {
    __extends(DirectorPPower, _super);
    function DirectorPPower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ALLOWABLE = (20 * PurchasePower.BASE);
        return _this;
    }
    DirectorPPower.prototype.processRequest = function (request) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("Director will approve $" + request.getAmount()));
        }
        else if ((this.successor != null)) {
            this.successor.processRequest(request);
        }
    };
    return DirectorPPower;
}(PurchasePower));
var ManagerPPower = /** @class */ (function (_super) {
    __extends(ManagerPPower, _super);
    function ManagerPPower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ALLOWABLE = (10 * PurchasePower.BASE);
        return _this;
    }
    ManagerPPower.prototype.processRequest = function (request) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("Manager will approve $" + request.getAmount()));
        }
        else if ((this.successor != null)) {
            this.successor.processRequest(request);
        }
    };
    return ManagerPPower;
}(PurchasePower));
var PresidentPPower = /** @class */ (function (_super) {
    __extends(PresidentPPower, _super);
    function PresidentPPower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ALLOWABLE = (60 * PurchasePower.BASE);
        return _this;
    }
    PresidentPPower.prototype.processRequest = function (request) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("President will approve $" + request.getAmount()));
        }
        else {
            console.log(("Your request for $"
                + (request.getAmount() + " needs a board meeting!")));
        }
    };
    return PresidentPPower;
}(PurchasePower));
var VicePresidentPPower = /** @class */ (function (_super) {
    __extends(VicePresidentPPower, _super);
    function VicePresidentPPower() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ALLOWABLE = (40 * PurchasePower.BASE);
        return _this;
    }
    VicePresidentPPower.prototype.processRequest = function (request) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("Vice President will approve $" + request.getAmount()));
        }
        else if ((this.successor != null)) {
            this.successor.processRequest(request);
        }
    };
    return VicePresidentPPower;
}(PurchasePower));
function demoUseOfChainOfResponsibility() {
    var manager = new ManagerPPower();
    var director = new DirectorPPower();
    var vp = new VicePresidentPPower();
    var president = new PresidentPPower();
    manager.setSuccessor(director);
    director.setSuccessor(vp);
    vp.setSuccessor(president);
    //manager.processRequest(new PurchaseRequest(500, "General")); // manager
    //manager.processRequest(new PurchaseRequest(5000, "General")); // director
    //manager.processRequest(new PurchaseRequest(10000, "General")); // vp
    //manager.processRequest(new PurchaseRequest(20000, "General"));  // president
    //manager.processRequest(new PurchaseRequest(30000, "General"));  // board
    // hackey recursion based input loop until I convert it to promise/async
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var waitForUserInput = function () {
        rl.question("Enter the amount to check who should approve your expenditure: ", function (answer) {
            if (answer == "exit") {
                rl.close();
            }
            else {
                manager.processRequest(new PurchaseRequest(answer, "General"));
                waitForUserInput();
            }
        });
    };
    waitForUserInput();
}
console.log("Starting...");
demoUseOfChainOfResponsibility();
//rl.close();
//# sourceMappingURL=ChainOfResponsibilityExample.js.map