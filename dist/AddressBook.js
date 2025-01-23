"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const ClassAddressBook_1 = require("./ClassAddressBook");
// UC1 - Ability to Create a New Contact
const createContact = () => {
    const firstName = readline_sync_1.default.question("Enter Your First Name: ");
    const lastName = readline_sync_1.default.question("Enter Your Last Name: ");
    const address = readline_sync_1.default.question("Enter Your Address: ");
    const city = readline_sync_1.default.question("Enter Your City: ");
    const state = readline_sync_1.default.question("Enter Your State: ");
    const zip = parseInt(readline_sync_1.default.question("Enter Your ZIP Code: "));
    const phoneNumber = parseInt(readline_sync_1.default.question("Enter Your Phone Number: "));
    const email = readline_sync_1.default.question("Enter Your Email: ");
    const newContact = {
        firstName, lastName, address, city, state, zip, phoneNumber, email
    };
    return newContact;
};
const editContact = () => {
    const nameToEdit = readline_sync_1.default.question("Enter the Name of the Contact You Want to Edit: ");
    return nameToEdit;
};
const deleteContact = () => {
    const nameToDelete = readline_sync_1.default.question("Enter the Name of the Contact You Want to Delete: ");
    return nameToDelete;
};
const addMultipleContacts = () => {
    const numberOfContacts = parseInt(readline_sync_1.default.question("Enter the Number of Contacts You Want to Add: "));
    let multipleContacts = [];
    for (let i = 1; i <= numberOfContacts; i++) {
        console.log("Enter the Details of Contact: ", i);
        let contact = createContact();
        multipleContacts.push(contact);
    }
    return multipleContacts;
};
const addressBookFunction = () => {
    console.log("Welcome to Address Book");
    let addressBook = new ClassAddressBook_1.AddressBook();
    while (true) {
        console.log("Operations: ");
        console.log("0: Get All Contacts");
        console.log("1: Add Contact");
        console.log("2: Edit Contact");
        console.log("3: Delete Contact");
        console.log("4: Add Multiple Contacts");
        const operation = parseInt(readline_sync_1.default.question("Choose: "));
        switch (operation) {
            case 0:
                let contacts = addressBook.getAllContacts();
                console.log(contacts);
                break;
            case 1:
                let newContact = createContact();
                addressBook.addContant(newContact);
                break;
            case 2:
                let nameToEdit = editContact();
                addressBook.editContact(nameToEdit);
                break;
            case 3:
                let nameToDelete = deleteContact();
                addressBook.deleteContact(nameToDelete);
                break;
            case 4:
                let multipleContacts = addMultipleContacts();
                addressBook.addMultipleContacts(multipleContacts);
        }
    }
};
addressBookFunction();
