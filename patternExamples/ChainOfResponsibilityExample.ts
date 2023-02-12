
class PurchaseRequest {
    
    private amount: number;
    
    private purpose: String;
    
    public constructor (amount: number, purpose: String) {
        this.amount = amount;
        this.purpose = purpose;
    }
    
    public getAmount(): number {
        return this.amount;
    }
}

 abstract class PurchasePower {
    
    protected static BASE: number = 500;
    
    protected successor: PurchasePower;
    
    public setSuccessor(successor: PurchasePower) {
        this.successor = successor;
    }
    
    public abstract processRequest(request: PurchaseRequest);
}

class DirectorPPower extends PurchasePower {
    
    private ALLOWABLE: number = (20 * PurchasePower.BASE);
    
    public processRequest(request: PurchaseRequest) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("Director will approve $" + request.getAmount()));
        }
        else if ((this.successor != null)) {
            this.successor.processRequest(request);
        }
        
    }
}
class ManagerPPower extends PurchasePower {
    
    private ALLOWABLE: number = (10 * PurchasePower.BASE);
    
    public processRequest(request: PurchaseRequest) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("Manager will approve $" + request.getAmount()));
        }
        else if ((this.successor != null)) {
            this.successor.processRequest(request);
        }
        
    }
}
class PresidentPPower extends PurchasePower {
    
    private ALLOWABLE: number = (60 * PurchasePower.BASE);
    
    public processRequest(request: PurchaseRequest) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("President will approve $" + request.getAmount()));
        }
        else {
            console.log(("Your request for $" 
                            + (request.getAmount() + " needs a board meeting!")));
        }
        
    }
}
class VicePresidentPPower extends PurchasePower {
    
    private ALLOWABLE: number = (40 * PurchasePower.BASE);
    
    public processRequest(request: PurchaseRequest) {
        if ((request.getAmount() < this.ALLOWABLE)) {
            console.log(("Vice President will approve $" + request.getAmount()));
        }
        else if ((this.successor != null)) {
            this.successor.processRequest(request);
        }
        
    }
}

    
function  demoUseOfChainOfResponsibility()  {
        let manager: ManagerPPower = new ManagerPPower();
        let director: DirectorPPower = new DirectorPPower();
        let vp: VicePresidentPPower = new VicePresidentPPower();
        let president: PresidentPPower = new PresidentPPower();
        manager.setSuccessor(director);
        director.setSuccessor(vp);
        vp.setSuccessor(president);

        //manager.processRequest(new PurchaseRequest(500, "General")); // manager
        //manager.processRequest(new PurchaseRequest(5000, "General")); // director
        //manager.processRequest(new PurchaseRequest(10000, "General")); // vp
        //manager.processRequest(new PurchaseRequest(20000, "General"));  // president
        //manager.processRequest(new PurchaseRequest(30000, "General"));  // board

        // hackey recursion based input loop until I convert it to promise/async
        const readline = require('readline')

        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        })
        

        var waitForUserInput = function() {
            rl.question("Enter the amount to check who should approve your expenditure: ", function(answer) {
              if (answer == "exit"){
                  rl.close();
              } else {
                  manager.processRequest(new PurchaseRequest(answer, "General"));
                  waitForUserInput();
              }
            });
          }

         waitForUserInput();
        
    }


console.log("Starting...")
demoUseOfChainOfResponsibility();
//rl.close();

   


