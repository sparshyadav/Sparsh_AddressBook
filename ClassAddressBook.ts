import { Contact } from "./ContactInterface";

export class AddressBook {
    public addressBook: Contact[];

    constructor() {
        this.addressBook = [];
    }

    getAllContacts(): Contact[] {
        return this.addressBook;
    }

    addContant(contact: Contact): void {
        this.addressBook.push(contact);
        console.log("Contact Added Successfully");
    }
}

