interface IDollarAmount // subject
{
    getDollars(): number;
    getCents(): number;
}

class DollarAmount implements IDollarAmount 
{

	public	constructor(  dollars:number, cents:number ) 
	{
		this.dollars = dollars;
		this.cents = cents;
	}
	public getDollars():number
	{
		return this.dollars;
	}
	public getCents():number
	{
		return this.cents;
	}
private	dollars:number;
private	cents:number;
}

class FractionalDollarAmount {

    public constructor(dollars: number) {
        this.dollars = dollars;
    }
    public getAmount(): number {
        return this.dollars;
    }
    private dollars: number;
}

class AmountPrinter {
    public static printAmounts(amounts: Array<IDollarAmount>): void {
        for (let i = 0; i < amounts.length; ++i)
            console.log("Amount = " + amounts[i].getDollars() + " dollars " + amounts[i].getCents() + " cents\n");
    }
}

class DollarAdapter implements IDollarAmount {
    public constructor(fractionalDollarAmount: FractionalDollarAmount) {
        this.fractionalDollarAmount = fractionalDollarAmount;
    }
    public getDollars(): number {
        return (Math.floor(this.fractionalDollarAmount.getAmount()));
    }
    public getCents(): number {
        return (this.fractionalDollarAmount.getAmount() * 100) - this.getDollars() * 100;
    }
    private fractionalDollarAmount: FractionalDollarAmount;
}

function demoUseOfAdapter() {

    var dollarAmount:DollarAmount = new DollarAmount( 19, 95 );

    var fractionalDollarAmount:FractionalDollarAmount = new FractionalDollarAmount( 17.89 );

    var dollarAdapter:DollarAdapter = new DollarAdapter( fractionalDollarAmount );

    var amounts:Array<IDollarAmount> = [];
    amounts.push( dollarAmount );
    amounts.push( dollarAdapter );

    // Should print 19.95 and 17.89
    console.log( "Should print 19.95 and 17.89\n");
    AmountPrinter.printAmounts( amounts );
    }
    
    console.log("Starting...")
    demoUseOfAdapter();