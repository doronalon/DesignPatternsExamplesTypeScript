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
var Shape = /** @class */ (function () {
    function Shape(display) {
        this.display = display;
    }
    return Shape;
}());
var ODisplay = /** @class */ (function () {
    function ODisplay() {
    }
    ODisplay.prototype.drawChar = function () {
        process.stdout.write("O");
    };
    ODisplay.prototype.println = function () {
        process.stdout.write("\n");
    };
    ODisplay.prototype.printBlank = function () {
        process.stdout.write(" ");
    };
    return ODisplay;
}());
"   ";
var OutlineRectangle = /** @class */ (function (_super) {
    __extends(OutlineRectangle, _super);
    function OutlineRectangle(charDisplay) {
        return _super.call(this, charDisplay) || this;
    }
    OutlineRectangle.prototype.draw = function () {
        for (var i = 0; (i < 10); i++) {
            this.display.drawChar();
        }
        this.display.println();
        this.display.drawChar();
        for (var i = 0; (i < 8); i++) {
            this.display.printBlank();
        }
        this.display.drawChar();
        this.display.println();
        for (var i = 0; (i < 10); i++) {
            this.display.drawChar();
        }
        this.display.println();
    };
    return OutlineRectangle;
}(Shape));
var SolidRectangle = /** @class */ (function (_super) {
    __extends(SolidRectangle, _super);
    function SolidRectangle(charDisplay) {
        return _super.call(this, charDisplay) || this;
    }
    SolidRectangle.prototype.draw = function () {
        for (var j = 0; (j < 3); j++) {
            for (var i = 0; (i < 10); i++) {
                this.display.drawChar();
            }
            this.display.println();
        }
    };
    return SolidRectangle;
}(Shape));
var StarDisplay = /** @class */ (function () {
    function StarDisplay() {
    }
    StarDisplay.prototype.drawChar = function () {
        process.stdout.write("*");
    };
    StarDisplay.prototype.println = function () {
        process.stdout.write("\n");
    };
    StarDisplay.prototype.printBlank = function () {
        process.stdout.write(" ");
    };
    return StarDisplay;
}());
var XDisplay = /** @class */ (function () {
    function XDisplay() {
    }
    XDisplay.prototype.drawChar = function () {
        process.stdout.write("X");
    };
    XDisplay.prototype.println = function () {
        process.stdout.write("\n");
    };
    XDisplay.prototype.printBlank = function () {
        process.stdout.write(" ");
    };
    return XDisplay;
}());
function demoUseOfBridge() {
    var starDisplay = new StarDisplay();
    var xDisplay = new XDisplay();
    var starSolidRectangle = new SolidRectangle(starDisplay);
    starSolidRectangle.draw();
    process.stdout.write("\n");
    var starOutlineRectangle = new OutlineRectangle(starDisplay);
    starOutlineRectangle.draw();
    process.stdout.write("\n");
    var xSolidRectangle = new SolidRectangle(xDisplay);
    xSolidRectangle.draw();
    process.stdout.write("\n");
    var xOutlineRectangle = new OutlineRectangle(xDisplay);
    xOutlineRectangle.draw();
    process.stdout.write("\n");
}
//console.log("Starting...")
process.stdout.write("abc\n");
demoUseOfBridge();
//# sourceMappingURL=BridgeExample.js.map