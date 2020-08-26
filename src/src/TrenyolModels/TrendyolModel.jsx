import ProductModel from "./ProductModel";

class TrendyolModel{
    constructor(
        product = new ProductModel(),
        htmlContent = null,
        user = null,
        configuration = null
    ){
        this.product = product;
        this.htmlContent = htmlContent;
        this.user = user;
        this.configuration = configuration;
    }
}

export default TrendyolModel;