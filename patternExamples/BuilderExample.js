"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialNumberListCreator = exports.DescendingBuilder = exports.AscendingBuilder = exports.NumberListBuilder = exports.NumberList = void 0;
var NumberList = /** @class */ (function () {
    function NumberList() {
        this.numberList = [];
    }
    NumberList.prototype.setTitle = function (title) {
        this.title = title;
    };
    NumberList.prototype.addToBack = function (num) {
        this.numberList.push(num);
    };
    NumberList.prototype.addToFront = function (num) {
        this.numberList.unshift(num);
    };
    NumberList.prototype.print = function () {
        process.stdout.write((this.title + " "));
        for (var i = 0; (i < this.numberList.length); i++) {
            process.stdout.write((this.numberList[i] + " "));
        }
        process.stdout.write("");
    };
    return NumberList;
}());
exports.NumberList = NumberList;
var NumberListBuilder = /** @class */ (function () {
    function NumberListBuilder() {
        this.numberList = new NumberList();
    }
    NumberListBuilder.prototype.getProduct = function () {
        return this.numberList;
    };
    return NumberListBuilder;
}());
exports.NumberListBuilder = NumberListBuilder;
var AscendingBuilder = /** @class */ (function (_super) {
    __extends(AscendingBuilder, _super);
    function AscendingBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AscendingBuilder.prototype.addNumber = function (i) {
        this.numberList.addToBack(i);
    };
    AscendingBuilder.prototype.setTitle = function () {
        this.numberList.setTitle("Ascending");
    };
    return AscendingBuilder;
}(NumberListBuilder));
exports.AscendingBuilder = AscendingBuilder;
var DescendingBuilder = /** @class */ (function (_super) {
    __extends(DescendingBuilder, _super);
    function DescendingBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescendingBuilder.prototype.addNumber = function (i) {
        this.numberList.addToFront(i);
    };
    DescendingBuilder.prototype.setTitle = function () {
        this.numberList.setTitle("Descending");
    };
    return DescendingBuilder;
}(NumberListBuilder));
exports.DescendingBuilder = DescendingBuilder;
var SequentialNumberListCreator = /** @class */ (function () {
    function SequentialNumberListCreator() {
    }
    SequentialNumberListCreator.prototype.createProduct = function (builder) {
        for (var i = 0; (i < 10); i++) {
            builder.addNumber(i);
        }
        builder.setTitle();
        this.builtProduct = builder.getProduct();
    };
    SequentialNumberListCreator.prototype.getBuiltProduct = function () {
        return this.builtProduct;
    };
    return SequentialNumberListCreator;
}());
exports.SequentialNumberListCreator = SequentialNumberListCreator;
function demoUseOfBuilder() {
    var creator = new SequentialNumberListCreator();
    creator.createProduct(new AscendingBuilder());
    var list = creator.getBuiltProduct();
    list.print();
}
console.log("Starting...");
process.stdout.write("abc\n");
demoUseOfBuilder();
//# sourceMappingURL=BuilderExample.js.map