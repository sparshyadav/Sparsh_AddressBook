"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBook = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
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
    editContact(contactName) {
        let objectToEdit = this.addressBook.find((obj) => {
            return obj.firstName == contactName;
        });
        if (!objectToEdit) {
            console.log("Contact Not Found");
        }
        else {
            const firstName = readline_sync_1.default.question("Enter Your First Name: ");
            const lastName = readline_sync_1.default.question("Enter Your Last Name: ");
            const address = readline_sync_1.default.question("Enter Your Address: ");
            const city = readline_sync_1.default.question("Enter Your City: ");
            const state = readline_sync_1.default.question("Enter Your State: ");
            const zip = parseInt(readline_sync_1.default.question("Enter Your ZIP Code: "));
            const phoneNumber = parseInt(readline_sync_1.default.question("Enter Your Phone Number: "));
            const email = readline_sync_1.default.question("Enter Your Email: ");
            if (firstName)
                objectToEdit.firstName = firstName;
            if (lastName)
                objectToEdit.lastName = lastName;
            if (address)
                objectToEdit.address = address;
            if (city)
                objectToEdit.city = city;
            if (state)
                objectToEdit.state = state;
            if (zip)
                objectToEdit.zip = zip;
            if (phoneNumber)
                objectToEdit.phoneNumber = phoneNumber;
            if (email)
                objectToEdit.email = email;
            console.log("Contact Edited Successfully");
        }
    }
}
exports.AddressBook = AddressBook;
