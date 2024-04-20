import { createId } from "@paralleldrive/cuid2";

export interface BasketItem {
    id: number;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: number;
    brand: string;
    type: string;
}

export interface Basket {
    id: string;
    items: BasketItem[];
}

export class Basket implements Basket {
    id: string = createId();
    items: BasketItem[] = [];
}

export interface BasketTotals {
    shipping: number;
    subTotal: number;
    total: number;
}