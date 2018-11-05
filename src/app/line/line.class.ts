import { Request } from '../request/request.class'
import { Product } from '../product/product.class'

export class Line {

    id: number;
    quantity: number;
    request: Request;
    product: Product;

        constructor () {
            this.id = 0;
            this.quantity = 0;

        }
    }
