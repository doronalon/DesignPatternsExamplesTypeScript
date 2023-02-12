interface CharDisplay {
    
    drawChar();
    
    println();
    
    printBlank();
}

abstract  class Shape {
    
    constructor (display: CharDisplay) {
        this.display = display;
    }
    
    public abstract draw();
    
    protected display: CharDisplay;
}

class ODisplay implements CharDisplay {
    
    public drawChar() {
        process.stdout.write("O");
    }
    
    
    public println() {
        process.stdout.write("\n");
    }
    
    
    public printBlank() {
        process.stdout.write(" ");
    }
}
`   `
class OutlineRectangle extends Shape {
     
    constructor (charDisplay: CharDisplay) {
        super(charDisplay);
    }
    
    public draw() {
        for (let i: number = 0; (i < 10); i++) {
            this.display.drawChar();
        }
        
        this.display.println();
        this.display.drawChar();
        for (let i: number = 0; (i < 8); i++) {
            this.display.printBlank();
        }
        
        this.display.drawChar();
        this.display.println();
        for (let i: number = 0; (i < 10); i++) {
            this.display.drawChar();
        }
        
        this.display.println();
    }
}

class SolidRectangle extends Shape {
    
    constructor (charDisplay: CharDisplay)  {
        super(charDisplay);
    }
    
    public draw() {
        for (let j: number = 0; (j < 3); j++) {
            for (let i: number = 0; (i < 10); i++) {
                this.display.drawChar();
            }
            
            this.display.println();
        }
        
    }
}

class StarDisplay implements CharDisplay {
    
    public drawChar() {
        process.stdout.write("*");
    }
    
    
    public println() {
        process.stdout.write("\n");
    }
    
    
    public printBlank() {
        process.stdout.write(" ");
    }
}

class XDisplay implements CharDisplay {
    
    public drawChar() {
        process.stdout.write("X");
    }
    
    
    public println() {
        process.stdout.write("\n");
    }
    
    
    public printBlank() {
        process.stdout.write(" ");
    }
}

function demoUseOfBridge() {
    let starDisplay: StarDisplay = new StarDisplay();
    let xDisplay: XDisplay = new XDisplay();
    let starSolidRectangle: SolidRectangle = new SolidRectangle(starDisplay);
    starSolidRectangle.draw();
    process.stdout.write("\n");
    let starOutlineRectangle: OutlineRectangle = new OutlineRectangle(starDisplay);
    starOutlineRectangle.draw();
    process.stdout.write("\n");
    let xSolidRectangle: SolidRectangle = new SolidRectangle(xDisplay);
    xSolidRectangle.draw();
    process.stdout.write("\n");
    let xOutlineRectangle: OutlineRectangle = new OutlineRectangle(xDisplay);
    xOutlineRectangle.draw();
    process.stdout.write("\n");
}

//console.log("Starting...")
process.stdout.write("abc\n");
demoUseOfBridge();