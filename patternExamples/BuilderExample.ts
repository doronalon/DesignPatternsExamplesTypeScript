export class NumberList {
    
    public setTitle(title: String) {
        this.title = title;
    }
    
    public addToBack(num: number) {
        this.numberList.push(num);
    }
    
    public addToFront(num: number) {
        this.numberList.unshift(num);
    }
    
    public print() {
        process.stdout.write((this.title + " "));
        for (let i: number = 0; (i < this.numberList.length); i++) {
            process.stdout.write((this.numberList[i] + " "));
        }
        
        process.stdout.write("");
    }
    
    private numberList: Array<number> = [];
    
    private title: String;
}
export  abstract  class NumberListBuilder {
    
    //  builder
    public abstract setTitle();
    
    public abstract addNumber(i: number);
    
    getProduct(): NumberList {
        return this.numberList;
    }
    
    protected numberList: NumberList = new NumberList();
}

export class AscendingBuilder extends NumberListBuilder {
    
    public addNumber(i: number) {
        this.numberList.addToBack(i);
    }
    
    public setTitle() {
        this.numberList.setTitle("Ascending");
    }
}
export class DescendingBuilder extends NumberListBuilder {
    
    public addNumber(i: number) {
        this.numberList.addToFront(i);
    }
    
    public setTitle() {
        this.numberList.setTitle("Descending");
    }
}

export class SequentialNumberListCreator {
    
    private builtProduct: NumberList;
    
    public createProduct(builder: NumberListBuilder) {
        for (let i: number = 0; (i < 10); i++) {
            builder.addNumber(i);
        }
        
        builder.setTitle();
        this.builtProduct = builder.getProduct();
    }
    
    public getBuiltProduct(): NumberList {
        return this.builtProduct;
    }
}

    
  function  demoUseOfBuilder()  {
        let creator: SequentialNumberListCreator = new SequentialNumberListCreator();
        creator.createProduct(new AscendingBuilder());
        let list: NumberList = creator.getBuiltProduct();
        list.print();
    }

console.log("Starting...")
process.stdout.write("abc\n");
demoUseOfBuilder();