interface AddressBookObject {    
   getAsString(): String;
}

class Contact implements AddressBookObject {
    
    public constructor (nameIn: String) {
        this.name = nameIn;
    }
    
    public getAsString(): String {
        return this.name;
    }
    
    private name: String = "";
}

class ContactGroup implements AddressBookObject {
    
    public constructor (nameIn: String) {
        this.name = nameIn;
    }
    
    public getAsString(): String {
        let result: string = "";
        for (let i: number = 0; (i < this.contacts.length); i++) {
            result+=this.contacts[i].getAsString()+" ";
        }
        
        return result.toString();
    }
    
    public addMember(member: AddressBookObject) {
        this.contacts.push(member);
    }
    
    public getName(): String {
        return this.name;
    }
    
    private name: String;
    
    private contacts: Array<AddressBookObject> = [];
}

class AddressBook {
    
    public createContactList() {
        let bill: Contact = new Contact("bill");
        let bob: Contact = new Contact("bob");
        let alice: Contact = new Contact("alice");
        let overUsed: ContactGroup = new ContactGroup("overused");
        overUsed.addMember(bob);
        overUsed.addMember(alice);
        let all: ContactGroup = new ContactGroup("all");
        all.addMember(bill);
        all.addMember(overUsed);
        console.log("Printing all contacts");
        console.log(all.getAsString());
    }
}
    
    function demoUseOfComposite() {
        let addressBook: AddressBook = new AddressBook();
        addressBook.createContactList();
    }

    demoUseOfComposite();