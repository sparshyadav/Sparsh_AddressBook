import readlineSync from "readline-sync";
import { Contact, singleAddressBook } from "./Interfaces";
import { AddressBook, AddressBookManager } from "./Classes";

// UC1 - Ability to Create a New Contact
const createContact = () => {
    const firstName: string = readlineSync.question("Enter Your First Name: ");
    const lastName: string = readlineSync.question("Enter Your Last Name: ");
    const address: string = readlineSync.question("Enter Your Address: ");
    const city: string = readlineSync.question("Enter Your City: ");
    const state: string = readlineSync.question("Enter Your State: ");
    const zip: number = parseInt(readlineSync.question("Enter Your ZIP Code: "));
    const phoneNumber: number = parseInt(readlineSync.question("Enter Your Phone Number: "));
    const email: string = readlineSync.question("Enter Your Email: ");

    const newContact: Contact = {
        firstName, lastName, address, city, state, zip, phoneNumber, email
    }

    return newContact;
}

const editContact = () => {
    const nameToEdit: string = readlineSync.question("Enter the Name of the Contact You Want to Edit: ");
    return nameToEdit;
}

const deleteContact = () => {
    const nameToDelete: string = readlineSync.question("Enter the Name of the Contact You Want to Delete: ");
    return nameToDelete;
}

const addMultipleContacts = () => {
    const numberOfContacts: number = parseInt(readlineSync.question("Enter the Number of Contacts You Want to Add: "));

    let multipleContacts = [];
    for (let i = 1; i <= numberOfContacts; i++) {
        console.log("Enter the Details of Contact: ", i);
        let contact = createContact();
        multipleContacts.push(contact);
    }

    return multipleContacts;
}

const addressBookFunction = (bookName: string): AddressBook => {
    console.log(`Welcome to ${bookName} Address Book`);
    let addressBook = new AddressBook();

    while (true) {
        console.log("Operations: ");
        console.log("0: Get All Contacts");
        console.log("1: Add Contact");
        console.log("2: Edit Contact");
        console.log("3: Delete Contact");
        console.log("4: Add Multiple Contacts");
        console.log("9: Exit the Program")

        const operation: number = parseInt(readlineSync.question("Choose: "));
        switch (operation) {
            case 0:
                let contacts = addressBook.getAllContacts();
                console.log(contacts);
                break;
            case 1:
                let newContact: Contact = createContact();
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
}

function addAddressBook(addressBookHandler: AddressBookManager): void {
    const nameOfAddressBook: string = readlineSync.question("Enter the Name of the Address Book: ");

    const isDuplicate = addressBookHandler.getAllAddressBooks().some(
        (book) => book.addressBookName === nameOfAddressBook
    );

    if (isDuplicate) {
        console.log(`An address book with the name "${nameOfAddressBook}" already exists. Cannot create a duplicate.`);
        return;
    }

    console.log(`Creating a new address book: ${nameOfAddressBook}`);

    const data = addressBookFunction(nameOfAddressBook);

    const newAddressBook: singleAddressBook = {
        addressBookName: nameOfAddressBook,
        data: data.getAllContacts()
    };

    addressBookHandler.addAddressBook(newAddressBook);
    console.log(`Address book "${nameOfAddressBook}" created successfully with data.`);
}

const addressBookManagerFunction = () => {
    console.log("Welcome to the Address Book Manager");
    let addressBookHandler = new AddressBookManager();

    while (true) {
        console.log("0: Get All Address Books");
        console.log("1: Add Address Book");
        console.log("9: Exit the Program");

        const operation: number = parseInt(readlineSync.question("Choose: "));
        switch (operation) {
            case 0:
                let allAddressBooks = addressBookHandler.getAllAddressBooks();
                console.log(allAddressBooks);
                break;
            case 1:
                addAddressBook(addressBookHandler);
                break;
            case 9:
                console.log("Exiting the Address Book Manager...");
                return;
        }
    }
};


addressBookManagerFunction();