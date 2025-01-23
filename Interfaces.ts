export interface Contact {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;
}

export interface singleAddressBook{
    addressBookName: string;
    data: Contact[];
}
