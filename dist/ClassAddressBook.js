"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
class AddressBook {
    constructor() {
        this.addressBook = [];
    }
    addContant(contact) {
        this.addressBook.push(contact);
        return "Contact Added Successfully";
    }
}
exports.AddressBook = AddressBook;
