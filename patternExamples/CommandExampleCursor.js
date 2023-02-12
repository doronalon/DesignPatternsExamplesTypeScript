var Cursor = /** @class */ (function () {
    function Cursor() {
        this.x = 0;
        this.y = 0;
    }
    return Cursor;
}());
var CursorMoveCommand = /** @class */ (function () {
    function CursorMoveCommand(cursor, dx, dy) {
        this.dx = dx;
        this.dy = dy;
        this.cursor = cursor;
    }
    CursorMoveCommand.prototype.execute = function () {
        this.cursor.x += this.dx;
        this.cursor.y += this.dy;
    };
    CursorMoveCommand.prototype.undo = function () {
        this.cursor.x -= this.dx;
        this.cursor.y -= this.dy;
    };
    return CursorMoveCommand;
}());
var CursorResetCommand = /** @class */ (function () {
    function CursorResetCommand(cursor) {
        this.cursor = cursor;
    }
    CursorResetCommand.prototype.execute = function () {
        this.previousX = this.cursor.x;
        this.previousY = this.cursor.y;
        this.cursor.x = 0;
        this.cursor.y = 0;
    };
    CursorResetCommand.prototype.undo = function () {
        this.cursor.x = this.previousX;
        this.cursor.y = this.previousY;
    };
    return CursorResetCommand;
}());
var CursorPrintCommand = /** @class */ (function () {
    function CursorPrintCommand(cursor) {
        this.cursor = cursor;
    }
    CursorPrintCommand.prototype.execute = function () {
        console.log("Cursor x = " + this.cursor.x + " y = " + this.cursor.y);
    };
    CursorPrintCommand.prototype.undo = function () {
        throw new Error("Cannot undo print");
    };
    return CursorPrintCommand;
}());
function demoCommandCursor() {
    var cursor1 = new Cursor();
    var commandArray = [];
    commandArray.push(new CursorMoveCommand(cursor1, 5, 3));
    commandArray.push(new CursorPrintCommand(cursor1));
    commandArray.push(new CursorResetCommand(cursor1));
    commandArray.push(new CursorPrintCommand(cursor1));
    commandArray.push(new CursorMoveCommand(cursor1, 5, 2));
    commandArray.push(new CursorMoveCommand(cursor1, 1, 1));
    commandArray.push(new CursorPrintCommand(cursor1));
    commandArray.forEach(function (command) {
        command.execute();
    });
    commandArray[5].undo();
    new CursorPrintCommand(cursor1).execute();
}
demoCommandCursor();
//# sourceMappingURL=CommandExampleCursor.js.map