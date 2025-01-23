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
const addressBookFunction = () => {
    let addressBook = new ClassAddressBook_1.AddressBook();
    console.log("Welcome to Address Book");
    console.log("Operations: ");
    console.log("1: Add Contact");
    const operation = parseInt(readline_sync_1.default.question("Choose: "));
};
addressBookFunction();
