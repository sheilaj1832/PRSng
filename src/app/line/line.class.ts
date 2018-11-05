import { Request } from '../request/request.class'
import { Product } from '../product/product.class'

export class Line {

    id: number;
    quantity: number;
    active: boolean;
    request: Request;
    requestID: number;
    product: Product;
    productID: number;

        constructor () {
            this.id = 0;
            this.quantity = 1;
            this.active = true;

        }
    }
