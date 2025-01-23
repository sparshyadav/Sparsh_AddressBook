import readlineSync from "readline-sync"
import fs from "fs";
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

function searchContact(addressBookHandler: AddressBookManager) {
    const contactToSearch: string = readlineSync.question("Enter the Name of the Contact You Want to Search: ");

    let flatList = addressBookHandler.getAllContacts().flat();
    let searchedContacts = flatList.filter((contact) => contact.firstName === contactToSearch);

    if (searchedContacts.length > 0) {
        console.log("Contact(s) found:", searchedContacts);
    } else {
        console.log("No contact found with that name.");
    }
}

function viewByState(addressBookHandler: AddressBookManager) {
    const stateToSearch: string = readlineSync.question("Enter the State You Want to Search: ");

    let flatList = addressBookHandler.getAllContacts().flat();
    let searchedContacts = flatList.filter((contact) => contact.state === stateToSearch);

    if (stateToSearch.length > 0) {
        console.log("Contact(s) found:", searchedContacts);
    } else {
        console.log("No contact found with that name.");
    }
}

function countByState(addressBookHandler: AddressBookManager) {
    const stateToSearch: string = readlineSync.question("Enter the State You Want to Search: ");


    let flatList = addressBookHandler.getAllContacts().flat();


    let searchedContacts = flatList.reduce((count, contact) => {
        if (contact.state === stateToSearch) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);

    if (searchedContacts > 0) {
        console.log(`Contact(s) found in ${stateToSearch}: ${searchedContacts}`);
    } else {
        console.log(`No contact found in the state: ${stateToSearch}`);
    }
}

function sortSpecificAddressBook(addressBookHandler: AddressBookManager): void {
    const allAddressBooks = addressBookHandler.getAllAddressBooks();

    if (allAddressBooks.length === 0) {
        console.log("No address books available to sort.");
        return;
    }

    console.log("Available Address Books:");
    allAddressBooks.forEach((book, index) => {
        console.log(`${index + 1}: ${book.addressBookName}`);
    });

    const bookIndex: number = parseInt(readlineSync.question("Enter the number of the Address Book to sort: ")) - 1;

    if (bookIndex < 0 || bookIndex >= allAddressBooks.length) {
        console.log("Invalid choice. Please select a valid address book.");
        return;
    }

    const selectedBook = allAddressBooks[bookIndex];

    selectedBook.data.sort((a, b) => a.firstName.localeCompare(b.firstName));

    console.log(`Address book "${selectedBook.addressBookName}" has been sorted alphabetically by name.`);
    console.log("Sorted Contacts:", selectedBook.data);
}

function sortSpecificAddressBookByAddress(addressBookHandler: AddressBookManager): void {
    const allAddressBooks = addressBookHandler.getAllAddressBooks();

    if (allAddressBooks.length === 0) {
        console.log("No address books available to sort.");
        return;
    }

    console.log("Available Address Books:");
    allAddressBooks.forEach((book, index) => {
        console.log(`${index + 1}: ${book.addressBookName}`);
    });

    const bookIndex: number = parseInt(readlineSync.question("Enter the number of the Address Book to sort by address: ")) - 1;

    if (bookIndex < 0 || bookIndex >= allAddressBooks.length) {
        console.log("Invalid choice. Please select a valid address book.");
        return;
    }

    const selectedBook = allAddressBooks[bookIndex];

    selectedBook.data.sort((a, b) => a.address.localeCompare(b.address));

    console.log(`Address book "${selectedBook.addressBookName}" has been sorted alphabetically by address.`);
    console.log("Sorted Contacts:", selectedBook.data);
}

const saveAllAddressBooksToFile = (fileName: string, addressBookHandler: AddressBookManager): void => {
    const allAddressBooks = addressBookHandler.getAllAddressBooks();
    const dataToSave = JSON.stringify(allAddressBooks, null, 2);
    fs.writeFileSync(fileName, dataToSave, "utf8");
    console.log(`All address books have been saved to ${fileName}`);
};

const addressBookManagerFunction = () => {
    console.log("Welcome to the Address Book Manager");
    let addressBookHandler = new AddressBookManager();

    while (true) {
        console.log("0: Get All Address Books");
        console.log("1: Add Address Book");
        console.log("2: Search Contact");
        console.log("3: View Contact by State");
        console.log("4: Count Contacts by State");
        console.log("5: Sort Address Book by Contact Name");
        console.log("6: Sort Address Book by Address");
        console.log("7: ")
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
            case 2:
                searchContact(addressBookHandler)
                break;
            case 3:
                viewByState(addressBookHandler)
                break;
            case 4:
                countByState(addressBookHandler);
                break;
            case 5:
                sortSpecificAddressBook(addressBookHandler);
                break;
            case 6:
                sortSpecificAddressBookByAddress(addressBookHandler);
                break;
            case 7:
                const fileName = readlineSync.question("Enter the file name to save all address books (e.g., addressBooks.json): ");
                saveAllAddressBooksToFile(fileName, addressBookHandler);
                break;
            case 9:
                console.log("Exiting the Address Book Manager...");
                return;
        }
    }
};


addressBookManagerFunction();