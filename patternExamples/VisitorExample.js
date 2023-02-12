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
var VisitorExample;
(function (VisitorExample) {
    var Product = /** @class */ (function () {
        function Product(price) {
            this.price = price;
        }
        Product.prototype.getPrice = function () {
            return this.price;
        };
        Product.prototype.setPrice = function (price) {
            this.price = price;
        };
        return Product;
    }());
    var DiscountProduct = /** @class */ (function (_super) {
        __extends(DiscountProduct, _super);
        function DiscountProduct(price, discountPrice) {
            var _this = _super.call(this, price) || this;
            _this.discountPrice = discountPrice;
            return _this;
        }
        DiscountProduct.prototype.executeCommand = function (command) {
            command.executeOnDiscountProduct(this);
        };
        DiscountProduct.prototype.getDiscountPrice = function () {
            return this.discountPrice;
        };
        DiscountProduct.prototype.setDiscountPrice = function (price) {
            this.discountPrice = price;
        };
        return DiscountProduct;
    }(Product));
    var NonDiscountProduct = /** @class */ (function (_super) {
        __extends(NonDiscountProduct, _super);
        function NonDiscountProduct(price) {
            return _super.call(this, price) || this;
        }
        NonDiscountProduct.prototype.executeCommand = function (command) {
            command.executeOnNonDiscountProduct(this);
        };
        return NonDiscountProduct;
    }(Product));
    var PrintPriceCommand = /** @class */ (function () {
        function PrintPriceCommand() {
        }
        PrintPriceCommand.prototype.executeOnDiscountProduct = function (discountProduct) {
            console.log("Product price = "
                + (discountProduct.getPrice() + (" ( on sale @ "
                    + (discountProduct.getDiscountPrice() + ") "))));
        };
        PrintPriceCommand.prototype.executeOnNonDiscountProduct = function (nonDiscountProduct) {
            console.log("Product price = " + (nonDiscountProduct.getPrice() + ""));
        };
        return PrintPriceCommand;
    }());
    var ReducePriceCommand = /** @class */ (function () {
        function ReducePriceCommand() {
            this.totalReductions = 0;
        }
        ReducePriceCommand.prototype.executeOnDiscountProduct = function (discountProduct) {
            discountProduct.setDiscountPrice((discountProduct.getDiscountPrice() - 1));
            discountProduct.setPrice((discountProduct.getPrice() - 1));
            this.totalReductions += 2;
        };
        ReducePriceCommand.prototype.executeOnNonDiscountProduct = function (nonDiscountProduct) {
            nonDiscountProduct.setPrice((nonDiscountProduct.getPrice() - 1));
            this.totalReductions++;
        };
        ReducePriceCommand.prototype.getTotalReductions = function () {
            return this.totalReductions;
        };
        return ReducePriceCommand;
    }());
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.demoUseOfVisitor = function () {
            var products = new Array();
            products.push(new DiscountProduct(10, 8));
            products.push(new DiscountProduct(10, 9));
            products.push(new NonDiscountProduct(10));
            var printPriceCommand = new PrintPriceCommand();
            Example.processProducts(products, printPriceCommand);
            var reducePriceCommand = new ReducePriceCommand();
            Example.processProducts(products, reducePriceCommand);
            console.log("Reduced prices. Total reductions = " + reducePriceCommand.getTotalReductions());
            console.log("New prices");
            Example.processProducts(products, printPriceCommand);
        };
        Example.processProducts = function (products, command) {
            for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
                var product = products_1[_i];
                product.executeCommand(command);
            }
        };
        return Example;
    }());
    VisitorExample.Example = Example;
})(VisitorExample || (VisitorExample = {}));
VisitorExample.Example.demoUseOfVisitor();
//# sourceMappingURL=VisitorExample.js.map