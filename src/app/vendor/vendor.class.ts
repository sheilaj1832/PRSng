export class Vendor {
    id: number;
    code: String;
    name: String;
    address: String;
    city: String;
    state: String;
    zip: number;
    phoneNumber: String;
    email: String;
    preapproved: boolean;

    constructor() {
        this.id = 0;
        this.preapproved = false;
    }
}
