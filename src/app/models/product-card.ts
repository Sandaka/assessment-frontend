export class ProductCard {
    productId: number;
    productName: string;
    unitPrice: number;
    cartonPrice: number;
    discountMsg: string;
    unitsPerCarton: number;
    totalProductAmount: number;
    optionId: number;
    optionName: string;
    qty: number

    constructor(productId = 0, productName = '', unitPrice = 0, cartonPrice = 0, discountMsg = '', singleUnitQty = 0, cartonQty = 0, unitsPerCarton = 0, totalProductAmount = 0, optionId = 0, optionName = '', qty = 0) {
        this.productId = productId;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.cartonPrice = cartonPrice;
        this.discountMsg = discountMsg;
        this.unitsPerCarton = unitsPerCarton;
        this.totalProductAmount = totalProductAmount;
        this.optionId = optionId;
        this.optionName = optionName;
        this.qty = qty;
    }
}