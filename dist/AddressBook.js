"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Classes_1 = require("./Classes");
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
const addressBookFunction = (bookName) => {
    console.log(`Welcome to ${bookName} Address Book`);
    let addressBook = new Classes_1.AddressBook();
    while (true) {
        console.log("Operations: ");
        console.log("0: Get All Contacts");
        console.log("1: Add Contact");
        console.log("2: Edit Contact");
        console.log("3: Delete Contact");
        console.log("4: Add Multiple Contacts");
        console.log("9: Exit the Program");
        const operation = parseInt(readline_sync_1.default.question("Choose: "));
        switch (operation) {
            case 0:
                let contacts = addressBook.getAllContacts();
                console.log(contacts);
                break;
            case 1:
                let newContact = createContact();
                addressBook.addContact(newContact);
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
                break;
            case 9:
                console.log(`Exiting ${bookName} Address Book...`);
                return addressBook;
        }
    }
};
function addAddressBook(addressBookHandler) {
    const nameOfAddressBook = readline_sync_1.default.question("Enter the Name of the Address Book: ");
    const isDuplicate = addressBookHandler.getAllAddressBooks().some((book) => book.addressBookName === nameOfAddressBook);
    if (isDuplicate) {
        console.log(`An address book with the name "${nameOfAddressBook}" already exists. Cannot create a duplicate.`);
        return;
    }
    console.log(`Creating a new address book: ${nameOfAddressBook}`);
    const data = addressBookFunction(nameOfAddressBook);
    const newAddressBook = {
        addressBookName: nameOfAddressBook,
        data: data.getAllContacts()
    };
    addressBookHandler.addAddressBook(newAddressBook);
    console.log(`Address book "${nameOfAddressBook}" created successfully with data.`);
}
function searchContact(addressBookHandler) {
    const contactToSearch = readline_sync_1.default.question("Enter the Name of the Contact You Want to Search: ");
    let flatList = addressBookHandler.getAllContacts().flat();
    let searchedContacts = flatList.filter((contact) => contact.firstName === contactToSearch);
    if (searchedContacts.length > 0) {
        console.log("Contact(s) found:", searchedContacts);
    }
    else {
        console.log("No contact found with that name.");
    }
}
function viewByState(addressBookHandler) {
    const stateToSearch = readline_sync_1.default.question("Enter the State You Want to Search: ");
    let flatList = addressBookHandler.getAllContacts().flat();
    let searchedContacts = flatList.filter((contact) => contact.state === stateToSearch);
    if (stateToSearch.length > 0) {
        console.log("Contact(s) found:", searchedContacts);
    }
    else {
        console.log("No contact found with that name.");
    }
}
function countByState(addressBookHandler) {
    const stateToSearch = readline_sync_1.default.question("Enter the State You Want to Search: ");
    let flatList = addressBookHandler.getAllContacts().flat();
    let searchedContacts = flatList.reduce((count, contact) => {
        if (contact.state === stateToSearch) {
            return count + 1;
        }
        else {
            return count;
        }
    }, 0);
    if (searchedContacts > 0) {
        console.log(`Contact(s) found in ${stateToSearch}: ${searchedContacts}`);
    }
    else {
        console.log(`No contact found in the state: ${stateToSearch}`);
    }
}
const addressBookManagerFunction = () => {
    console.log("Welcome to the Address Book Manager");
    let addressBookHandler = new Classes_1.AddressBookManager();
    while (true) {
        console.log("0: Get All Address Books");
        console.log("1: Add Address Book");
        console.log("2: Search Contact");
        console.log("3: View Contact by State");
        console.log("4: Count Contacts by State");
        console.log("9: Exit the Program");
        const operation = parseInt(readline_sync_1.default.question("Choose: "));
        switch (operation) {
            case 0:
                let allAddressBooks = addressBookHandler.getAllAddressBooks();
                console.log(allAddressBooks);
                break;
            case 1:
                addAddressBook(addressBookHandler);
                break;
            case 2:
                searchContact(addressBookHandler);
                break;
            case 3:
                viewByState(addressBookHandler);
                break;
            case 4:
                countByState(addressBookHandler);
                break;
            case 9:
                console.log("Exiting the Address Book Manager...");
                return;
        }
    }
};
addressBookManagerFunction();
