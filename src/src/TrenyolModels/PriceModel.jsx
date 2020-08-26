import PricetemModel from './PricetemModel';

class PriceModel{
    constructor(
        profitMargin = 0,
        discountedPrice = new PricetemModel(),
        sellingPrice = new PricetemModel(),
        originalPrice = new PricetemModel(),
        currency = ""
    ){
        this.profitMargin = profitMargin;
        this.discountedPrice = discountedPrice;
        this.sellingPrice = sellingPrice;
        this.originalPrice = originalPrice;
        this.currency = currency;
    }
}

export default PriceModel;