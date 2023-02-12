var Contact = /** @class */ (function () {
    function Contact(nameIn) {
        this.name = "";
        this.name = nameIn;
    }
    Contact.prototype.getAsString = function () {
        return this.name;
    };
    return Contact;
}());
var ContactGroup = /** @class */ (function () {
    function ContactGroup(nameIn) {
        this.contacts = [];
        this.name = nameIn;
    }
    ContactGroup.prototype.getAsString = function () {
        var result = "";
        for (var i = 0; (i < this.contacts.length); i++) {
            result += this.contacts[i].getAsString() + " ";
        }
        return result.toString();
    };
    ContactGroup.prototype.addMember = function (member) {
        this.contacts.push(member);
    };
    ContactGroup.prototype.getName = function () {
        return this.name;
    };
    return ContactGroup;
}());
var AddressBook = /** @class */ (function () {
    function AddressBook() {
    }
    AddressBook.prototype.createContactList = function () {
        var bill = new Contact("bill");
        var bob = new Contact("bob");
        var alice = new Contact("alice");
        var overUsed = new ContactGroup("overused");
        overUsed.addMember(bob);
        overUsed.addMember(alice);
        var all = new ContactGroup("all");
        all.addMember(bill);
        all.addMember(overUsed);
        console.log("Printing all contacts");
        console.log(all.getAsString());
    };
    return AddressBook;
}());
function demoUseOfComposite() {
    var addressBook = new AddressBook();
    addressBook.createContactList();
}
demoUseOfComposite();
//# sourceMappingURL=CompositeExample.js.map