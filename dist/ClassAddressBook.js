"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
class AddressBook {
    constructor() {
        this.addressBook = [];
    }
    getAllContacts() {
        return this.addressBook;
    }
    addContant(contact) {
        this.addressBook.push(contact);
        console.log("Contact Added Successfully");
    }
}
exports.AddressBook = AddressBook;
