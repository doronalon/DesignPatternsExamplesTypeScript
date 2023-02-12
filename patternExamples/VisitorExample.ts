namespace VisitorExample {
	abstract class Product {

		protected price: number;

		public constructor(price: number) {
			this.price = price;
		}

		public abstract executeCommand(command: ProductCommand);

		public getPrice(): number {
			return this.price;
		}

		public setPrice(price: number) {
			this.price = price;
		}
	}

	class DiscountProduct extends Product {

		private discountPrice: number;

		public constructor(price: number, discountPrice: number) {
			super(price);
			this.discountPrice = discountPrice;
		}

		public executeCommand(command: ProductCommand) {
			command.executeOnDiscountProduct(this);
		}

		public getDiscountPrice(): number {
			return this.discountPrice;
		}

		public setDiscountPrice(price: number) {
			this.discountPrice = price;
		}
	}

	class NonDiscountProduct extends Product {

		public constructor(price: number) {
			super(price);
		}

		public executeCommand(command: ProductCommand) {
			command.executeOnNonDiscountProduct(this);
		}
	}

	interface ProductCommand {

		executeOnDiscountProduct(discountProduct: DiscountProduct);

		executeOnNonDiscountProduct(nonDiscountProduct: NonDiscountProduct);
	}
	class PrintPriceCommand implements ProductCommand {

		public executeOnDiscountProduct(discountProduct: DiscountProduct) {
			console.log("Product price = "
				+ (discountProduct.getPrice() + (" ( on sale @ "
					+ (discountProduct.getDiscountPrice() + ") "))));
    }

		public executeOnNonDiscountProduct(nonDiscountProduct: NonDiscountProduct) {
			console.log("Product price = "+ (nonDiscountProduct.getPrice() + ""));
    }
	}
	class ReducePriceCommand implements ProductCommand {

		private totalReductions: number;

		constructor() {
			this.totalReductions = 0;
		}

		public executeOnDiscountProduct(discountProduct: DiscountProduct) {
			discountProduct.setDiscountPrice((discountProduct.getDiscountPrice() - 1));
			discountProduct.setPrice((discountProduct.getPrice() - 1));
			this.totalReductions += 2;
		}

		public executeOnNonDiscountProduct(nonDiscountProduct: NonDiscountProduct) {
			nonDiscountProduct.setPrice((nonDiscountProduct.getPrice() - 1));
			this.totalReductions++;
		}

		public getTotalReductions(): number {
			return this.totalReductions;
		}
	}

	export class Example {

		public static demoUseOfVisitor() {
			let products: Array<Product> = new Array<Product>();
			products.push(new DiscountProduct(10, 8));
			products.push(new DiscountProduct(10, 9));
			products.push(new NonDiscountProduct(10));
			let printPriceCommand: PrintPriceCommand = new PrintPriceCommand();
			Example.processProducts(products, printPriceCommand);
			let reducePriceCommand: ReducePriceCommand = new ReducePriceCommand();
			Example.processProducts(products, reducePriceCommand);
			console.log("Reduced prices. Total reductions = " + reducePriceCommand.getTotalReductions());
			console.log("New prices");
			Example.processProducts(products, printPriceCommand);
		}

		static processProducts(products: Array<Product>, command: ProductCommand) {
			for (let product of products) {
				product.executeCommand(command);
			}

		}
	}
}

VisitorExample.Example.demoUseOfVisitor()