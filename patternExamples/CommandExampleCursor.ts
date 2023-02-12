class Cursor {
    x: number = 0;
    y: number = 0;
}

interface CursorCommand {
    execute();
    undo();
}

class CursorMoveCommand implements CursorCommand {
    dx: number;
    dy: number;
    private cursor: Cursor;

    public constructor(cursor: Cursor, dx: number, dy: number) {
        this.dx = dx;
        this.dy = dy;
        this.cursor = cursor;
    }

    public execute(): void {
        this.cursor.x += this.dx;
        this.cursor.y += this.dy;
    }

    public undo(): void {
        this.cursor.x -= this.dx;
        this.cursor.y -= this.dy;
    }
}

class CursorResetCommand implements CursorCommand {
    private cursor: Cursor;
    private previousX: number;
    private previousY: number;

    public constructor(cursor: Cursor) {
        this.cursor = cursor;
    }

    public execute(): void {
        this.previousX = this.cursor.x;
        this.previousY = this.cursor.y;
        this.cursor.x = 0;
        this.cursor.y = 0;
    }

    public undo(): void {
        this.cursor.x = this.previousX;
        this.cursor.y = this.previousY;
    }
}

class CursorPrintCommand implements CursorCommand {
    private cursor: Cursor;

    public constructor(cursor: Cursor) {
        this.cursor = cursor;
    }

    public execute(): void {
        console.log("Cursor x = " + this.cursor.x + " y = " + this.cursor.y);
    }

    public undo(): void {
        throw new Error("Cannot undo print");
    }
}

function demoCommandCursor() {
    let cursor1: Cursor = new Cursor();
    let commandArray: Array<CursorCommand> = [];
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

