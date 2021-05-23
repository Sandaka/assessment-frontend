export class ItemDetail {
    buyingOption: string;
    qty: number

    constructor(buyingOption = '', qty = 0) {
        this.buyingOption = buyingOption;
        this.qty = qty;
    }
}