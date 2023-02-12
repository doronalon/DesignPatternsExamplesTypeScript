var FlyweightExample;
(function (FlyweightExample) {
    //  ConcreteFlyweight object that creates ConcreteFlyweight 
    var CharacterWithFont = /** @class */ (function () {
        function CharacterWithFont(fontAndChar) {
            this.fontAndChar = fontAndChar;
        }
        CharacterWithFont.prototype.getFontAndChar = function () {
            return this.fontAndChar;
        };
        CharacterWithFont.prototype.drawCharacter = function (context) {
            console.log(("Drawing Character " + (this.fontAndChar + (" at position " + context.getPosition()))));
        };
        return CharacterWithFont;
    }());
    var CharacterPositionContext = /** @class */ (function () {
        function CharacterPositionContext(charPosition) {
            this.charPosition = 0;
            this.charPosition = charPosition;
        }
        CharacterPositionContext.prototype.getPosition = function () {
            return this.charPosition;
        };
        return CharacterPositionContext;
    }());
    // FlyweightFactory object
    var CharacterFactory = /** @class */ (function () {
        function CharacterFactory() {
            this.fontAndChars = new Map();
        }
        CharacterFactory.prototype.getCharacterWithFont = function (fontAndChar) {
            var fontAndCharObject = this.fontAndChars.get(fontAndChar);
            if ((fontAndCharObject == null)) {
                fontAndCharObject = new CharacterWithFont(fontAndChar);
                this.fontAndChars.set(fontAndChar, fontAndCharObject);
            }
            return fontAndCharObject;
        };
        CharacterFactory.prototype.getTotalFontAndCharObjectsMade = function () {
            return this.fontAndChars.size;
        };
        return CharacterFactory;
    }());
    var Example = /** @class */ (function () {
        function Example() {
        }
        Example.demoUseOfFlyweight = function () {
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
            for (var i = 0; (i < this.numberOfCharacters); i++) {
                this.characters[i].drawCharacter(this.characterPositions[i]);
            }
            console.log(" ");
            console.log(("total CharacterWithFont objects made: " + this.characterFactory.getTotalFontAndCharObjectsMade()));
        };
        Example.addCharacterWithFont = function (characterWithFontIn, characterPosition) {
            this.characters[this.numberOfCharacters] = this.characterFactory.getCharacterWithFont(characterWithFontIn);
            this.characterPositions[this.numberOfCharacters++] = new CharacterPositionContext(characterPosition);
        };
        Example.characters = new Array(100);
        Example.characterPositions = new Array(100);
        Example.numberOfCharacters = 0;
        return Example;
    }());
    FlyweightExample.Example = Example;
})(FlyweightExample || (FlyweightExample = {}));
FlyweightExample.Example.demoUseOfFlyweight();
//# sourceMappingURL=FlyweightExample.js.map