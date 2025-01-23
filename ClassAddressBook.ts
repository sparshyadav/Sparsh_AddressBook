import { Contact } from "./ContactInterface";

export class AddressBook {
    public addressBook: Contact[];

    constructor() {
        this.addressBook = [];
    }

    addContant(contact: Contact): string {
        this.addressBook.push(contact);
        return "Contact Added Successfully";
    }
}

