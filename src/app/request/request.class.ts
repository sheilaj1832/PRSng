import { User } from '../user/user.class'

export class Request {

        id: number;
        description: string;
        justification: string;
        dateNeeded: Date;
        deliveryMode: string;
        status: string;
        total: number;
        submittedDate: Date;
        reasonForRejection: string;
        user: User;

        constructor () {
            this.id = 0;
            this.status = "NEW";
            this.submittedDate = null;
        }
    }
