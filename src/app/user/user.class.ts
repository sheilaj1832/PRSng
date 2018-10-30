export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    reviewer: boolean;
    admin: boolean;

    constructor () {
        this.id = 0;
        this.password = 'password'
        this.reviewer = false;
        this.admin = false;
    }

}