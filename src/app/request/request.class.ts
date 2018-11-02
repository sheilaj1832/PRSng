import { User } from '../user/user.class'

export class Request {

        id: number;
        description: string;
        justification: string;
        dateNeeded: string;
        deliveryMode: string;
        status: string;
        total: number;
        submittedDate: string;
        reasonForRejection: string;
        user: User;

        constructor () {
            this.id = 0;
        }
    }
