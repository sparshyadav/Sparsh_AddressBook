import readlineSync from "readline-sync";
import { Contact } from "./ContactInterface";
import { AddressBook } from "./ClassAddressBook";

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
    console.log(nameToEdit);
    return nameToEdit;
}

const addressBookFunction = () => {
    console.log("Welcome to Address Book");
    let addressBook = new AddressBook();

    while (true) {
        console.log("Operations: ");
        console.log("0: Get All Contacts");
        console.log("1: Add Contact");
        console.log("2: Edit Contact");

        const operation: number = parseInt(readlineSync.question("Choose: "));
        switch (operation) {
            case 0:
                let contacts = addressBook.getAllContacts();
                console.log(contacts);
                break;
            case 1:
                let newContact: Contact = createContact();
                addressBook.addContant(newContact);
                break;
            case 2:
                let nameToEdit = editContact();
                addressBook.editContact(nameToEdit);
        }
    }
}

addressBookFunction();
