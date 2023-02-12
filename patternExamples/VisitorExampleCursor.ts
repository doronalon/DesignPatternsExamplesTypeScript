namespace VisitorExampleCursor {
    
    export interface ICursor {
        
        setX(x: number);
        
        setY(y: number);
        
        getX(): number;
        
        getY(): number;
        
        accept(cursorCommand: CursorCommand);
    }
    
    class Cursor implements ICursor {
        
        public constructor (x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        
        public x: number;
        
        public y: number;
        
        public accept(cursorCommand: CursorCommand) {
            cursorCommand.executeOnCursor(this);
        }
        
        public setX(x: number) {
            this.x = x;
        }
        
        public setY(y: number) {
            this.y = y;
        }
        
        public getX(): number {
            return this.x;
        }
        
        public getY(): number {
            return this.y;
        }
    }
    
    class Cursor2 implements ICursor {
        
        public constructor (x: number, y: number) {
            this.x = x;
            this.y = y;
            this.z = 0;
        }
        
        public x: number;
        
        public y: number;
        
        public z: number;
        
        public accept(cursorCommand: CursorCommand) {
            cursorCommand.executeOnCursor2(this);
        }
        
        public setX(x: number) {
            this.x = x;
        }
        
        public setY(y: number) {
            this.y = y;
        }
        
        public getX(): number {
            return this.x;
        }
        
        public getY(): number {
            return this.y;
        }
        
        public getZ(): number {
            return this.z;
        }
        
        public setZ(i: number) {
            this.z = i;
        }
    }
    
    export interface CursorCommand {
        
        executeOnCursor(cursor: Cursor);
        
        executeOnCursor2(cursor: Cursor2);
    }
    
    class CursorMoveCommand implements CursorCommand {
        
        private dx: number;
        
        private dy: number;
               
        private dz: number;
        
        public constructor (dx: number, dy: number, dz: number) {
            this.dx = dx;
            this.dy = dy;
            this.dz = dz;
        }
        
        public executeOnCursor(cursor: Cursor) {
            cursor.setX((cursor.getX() + this.dx));
            cursor.setY((cursor.getY() + this.dy));
        }
        
        public executeOnCursor2(cursor: Cursor2) {
            cursor.setX((cursor.getX() + this.dx));
            cursor.setY((cursor.getY() + this.dy));
            cursor.setZ((cursor.getZ() + this.dz));
        }
    }
    
    class CursorResetCommand implements CursorCommand {
        
        public executeOnCursor(cursor: Cursor) {
            cursor.setX(0);
            cursor.setY(0);
        }
        
        public executeOnCursor2(cursor: Cursor2) {
            cursor.setX(0);
            cursor.setY(0);
            cursor.setZ(0);
        }
    }
    
    class CursorPrintCommand implements CursorCommand {
        
        public constructor () {
            
        }
        
        public executeOnCursor(cursor: Cursor) {
            console.log(("Cursor class x = " 
                            + (cursor.getX() + (" y = " + cursor.getY()))));
        }
        
        public executeOnCursor2(cursor: Cursor2) {
            console.log(("****Cursor2 class x = " 
                            + (cursor.getX() + (" y = " 
                            + (cursor.getY() + (" z = " + cursor.getZ()))))));
        }
    }
    
    export function demoUseOfVisitor() {
        let cursors: Array<ICursor> = new Array<ICursor>();
        cursors.push(new Cursor(5, 3));
        cursors.push(new Cursor2(4, 2));
        cursors.push(new Cursor(8, 1));
        //for (let c of cursors) {
        //    c.accept(new CursorResetCommand());
        //}
        
        for (let c of cursors) {
            c.accept(new CursorMoveCommand(1, 1, 1));
        }
        
        for (let c of cursors) {
            c.accept(new CursorMoveCommand(2, 2, 2));
        }
        
        for (let c of cursors) {
            c.accept(new CursorPrintCommand());
        }
        
    }
}

VisitorExampleCursor.demoUseOfVisitor()