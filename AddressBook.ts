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

const addressBookFunction = () => {
    let addressBook = new AddressBook();
    console.log("Welcome to Address Book");
    console.log("Operations: ");
    console.log("1: Add Contact");

    const operation: number = parseInt(readlineSync.question("Choose: "));
    switch(operation){
        case 1:
            let newContact: Contact=createContact();
            addressBook.addContant(newContact);
            break;
    }
}

addressBookFunction();
