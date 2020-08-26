
class ContentModel{
    constructor(
        product = null,
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

export default ContentModel;