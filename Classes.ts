import readlineSync from "readline-sync";
import { Contact, singleAddressBook } from "./Interfaces";

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

    editContact(contactName: string): void {
        let objectToEdit = this.addressBook.find((obj) => {
            return obj.firstName == contactName;
        })

        if (!objectToEdit) {
            console.log("Contact Not Found");
        }
        else {
            const firstName: string = readlineSync.question("Enter Your First Name: ");
            const lastName: string = readlineSync.question("Enter Your Last Name: ");
            const address: string = readlineSync.question("Enter Your Address: ");
            const city: string = readlineSync.question("Enter Your City: ");
            const state: string = readlineSync.question("Enter Your State: ");
            const zip: number = parseInt(readlineSync.question("Enter Your ZIP Code: "));
            const phoneNumber: number = parseInt(readlineSync.question("Enter Your Phone Number: "));
            const email: string = readlineSync.question("Enter Your Email: ");

            if (firstName) objectToEdit.firstName = firstName;
            if (lastName) objectToEdit.lastName = lastName;
            if (address) objectToEdit.address = address;
            if (city) objectToEdit.city = city;
            if (state) objectToEdit.state = state;
            if (zip) objectToEdit.zip = zip;
            if (phoneNumber) objectToEdit.phoneNumber = phoneNumber;
            if (email) objectToEdit.email = email;

            console.log("Contact Edited Successfully");
        }
    }

    deleteContact(contactName: string): void {
        let newContactsList = this.addressBook.filter((obj) => {
            return obj.firstName != contactName;
        })

        this.addressBook = newContactsList;

        console.log("Contact Edited Successfully");
    }

    addMultipleContacts(multipleContacts: Contact[]): void {
        multipleContacts.forEach((contact) => {
            this.addContant(contact);
        })

        console.log("Multiple Contacts Added Successfully");
    }
}

export class AddressBookManager{
    public listOfAddressBooks: singleAddressBook[]=[];

    constructor(){
        this.listOfAddressBooks=[];
    }

    getAllAddressBooks():singleAddressBook[]{
        return this.listOfAddressBooks;
    }

    addAddressBook(addressBook: singleAddressBook): void{
        this.listOfAddressBooks.push(addressBook);
    }
}


