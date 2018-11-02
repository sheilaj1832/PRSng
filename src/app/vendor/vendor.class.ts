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
    preApproved: boolean;

    constructor() {
        this.id = 0;
        this.preApproved = false;
    }
}
