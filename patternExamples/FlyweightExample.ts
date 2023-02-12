namespace FlyweightExample {

    interface ICharater {
        drawCharacter(context: CharacterPositionContext);
    }

    //  ConcreteFlyweight object that creates ConcreteFlyweight 
    class CharacterWithFont implements ICharater {

        private fontAndChar: String;

        public constructor(fontAndChar: String) {
            this.fontAndChar = fontAndChar;
        }

        public getFontAndChar(): String {
            return this.fontAndChar;
        }

        public drawCharacter(context: CharacterPositionContext) {
            console.log(("Drawing Character " + (this.fontAndChar + (" at position " + context.getPosition()))));
        }
    }

    class CharacterPositionContext {

        private charPosition: number = 0;

        public constructor(charPosition: number) {
            this.charPosition = charPosition;
        }

        public getPosition(): number {
            return this.charPosition;
        }
    }

    // FlyweightFactory object
    class CharacterFactory {

        private fontAndChars: Map<String, CharacterWithFont> = new Map<String, CharacterWithFont>();

        public getCharacterWithFont(fontAndChar: String): CharacterWithFont {
            let fontAndCharObject: CharacterWithFont = this.fontAndChars.get(fontAndChar);
            if ((fontAndCharObject == null)) {
                fontAndCharObject = new CharacterWithFont(fontAndChar);
                this.fontAndChars.set(fontAndChar, fontAndCharObject);
            }

            return fontAndCharObject;
        }

        public getTotalFontAndCharObjectsMade(): number {
            return this.fontAndChars.size;
        }
    }
    export class Example {

        private static characters: CharacterWithFont[] = new Array(100);

        private static characterPositions: CharacterPositionContext[] = new Array(100);

        private static numberOfCharacters: number = 0;

        private static characterFactory: CharacterFactory;

        public static demoUseOfFlyweight() {
            this.characterFactory = new CharacterFactory();
            Example.addCharacterWithFont("Courier-A", 2);
            Example.addCharacterWithFont("Courier-A", 2);
            Example.addCharacterWithFont("Courier-B", 1);
            Example.addCharacterWithFont("Courier-B", 1);
            Example.addCharacterWithFont("Helvetica-A", 1);
            Example.addCharacterWithFont("Courier-B", 897);
            Example.addCharacterWithFont("Courier-A", 97);
            Example.addCharacterWithFont("Courier-A", 97);
            Example.addCharacterWithFont("Courier-B", 3);
            Example.addCharacterWithFont("Helvetica-A", 3);
            Example.addCharacterWithFont("Courier-A", 3);
            Example.addCharacterWithFont("Helvetica-A", 96);
            Example.addCharacterWithFont("Courier-B", 552);
            Example.addCharacterWithFont("Courier-A", 121);
            Example.addCharacterWithFont("Helvetica-A", 121);
            for (let i: number = 0; (i < this.numberOfCharacters); i++) {
                this.characters[i].drawCharacter(this.characterPositions[i]);
            }

            console.log(" ");
            console.log
                (("total CharacterWithFont objects made: " + this.characterFactory.getTotalFontAndCharObjectsMade()));
        }

        public static addCharacterWithFont(characterWithFontIn: String, characterPosition: number) {
            this.characters[this.numberOfCharacters] = this.characterFactory.getCharacterWithFont(characterWithFontIn);
            this.characterPositions[this.numberOfCharacters++] = new CharacterPositionContext(characterPosition);
        }
    }
}

FlyweightExample.Example.demoUseOfFlyweight()