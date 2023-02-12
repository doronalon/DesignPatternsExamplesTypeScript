var VisitorExampleCursor;
(function (VisitorExampleCursor) {
    var Cursor = /** @class */ (function () {
        function Cursor(x, y) {
            this.x = x;
            this.y = y;
        }
        Cursor.prototype.accept = function (cursorCommand) {
            cursorCommand.executeOnCursor(this);
        };
        Cursor.prototype.setX = function (x) {
            this.x = x;
        };
        Cursor.prototype.setY = function (y) {
            this.y = y;
        };
        Cursor.prototype.getX = function () {
            return this.x;
        };
        Cursor.prototype.getY = function () {
            return this.y;
        };
        return Cursor;
    }());
    var Cursor2 = /** @class */ (function () {
        function Cursor2(x, y) {
            this.x = x;
            this.y = y;
            this.z = 0;
        }
        Cursor2.prototype.accept = function (cursorCommand) {
            cursorCommand.executeOnCursor2(this);
        };
        Cursor2.prototype.setX = function (x) {
            this.x = x;
        };
        Cursor2.prototype.setY = function (y) {
            this.y = y;
        };
        Cursor2.prototype.getX = function () {
            return this.x;
        };
        Cursor2.prototype.getY = function () {
            return this.y;
        };
        Cursor2.prototype.getZ = function () {
            return this.z;
        };
        Cursor2.prototype.setZ = function (i) {
            this.z = i;
        };
        return Cursor2;
    }());
    var CursorMoveCommand = /** @class */ (function () {
        function CursorMoveCommand(dx, dy, dz) {
            this.dx = dx;
            this.dy = dy;
            this.dz = dz;
        }
        CursorMoveCommand.prototype.executeOnCursor = function (cursor) {
            cursor.setX((cursor.getX() + this.dx));
            cursor.setY((cursor.getY() + this.dy));
        };
        CursorMoveCommand.prototype.executeOnCursor2 = function (cursor) {
            cursor.setX((cursor.getX() + this.dx));
            cursor.setY((cursor.getY() + this.dy));
            cursor.setZ((cursor.getZ() + this.dz));
        };
        return CursorMoveCommand;
    }());
    var CursorResetCommand = /** @class */ (function () {
        function CursorResetCommand() {
        }
        CursorResetCommand.prototype.executeOnCursor = function (cursor) {
            cursor.setX(0);
            cursor.setY(0);
        };
        CursorResetCommand.prototype.executeOnCursor2 = function (cursor) {
            cursor.setX(0);
            cursor.setY(0);
            cursor.setZ(0);
        };
        return CursorResetCommand;
    }());
    var CursorPrintCommand = /** @class */ (function () {
        function CursorPrintCommand() {
        }
        CursorPrintCommand.prototype.executeOnCursor = function (cursor) {
            console.log(("Cursor class x = "
                + (cursor.getX() + (" y = " + cursor.getY()))));
        };
        CursorPrintCommand.prototype.executeOnCursor2 = function (cursor) {
            console.log(("****Cursor2 class x = "
                + (cursor.getX() + (" y = "
                    + (cursor.getY() + (" z = " + cursor.getZ()))))));
        };
        return CursorPrintCommand;
    }());
    function demoUseOfVisitor() {
        var cursors = new Array();
        cursors.push(new Cursor(5, 3));
        cursors.push(new Cursor2(4, 2));
        cursors.push(new Cursor(8, 1));
        //for (let c of cursors) {
        //    c.accept(new CursorResetCommand());
        //}
        for (var _i = 0, cursors_1 = cursors; _i < cursors_1.length; _i++) {
            var c = cursors_1[_i];
            c.accept(new CursorMoveCommand(1, 1, 1));
        }
        for (var _a = 0, cursors_2 = cursors; _a < cursors_2.length; _a++) {
            var c = cursors_2[_a];
            c.accept(new CursorMoveCommand(2, 2, 2));
        }
        for (var _b = 0, cursors_3 = cursors; _b < cursors_3.length; _b++) {
            var c = cursors_3[_b];
            c.accept(new CursorPrintCommand());
        }
    }
    VisitorExampleCursor.demoUseOfVisitor = demoUseOfVisitor;
})(VisitorExampleCursor || (VisitorExampleCursor = {}));
VisitorExampleCursor.demoUseOfVisitor();
//# sourceMappingURL=VisitorExampleCursor.js.map