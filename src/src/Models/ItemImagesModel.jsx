import { v4 as uuidv4 } from 'uuid';

class ItemImagesModel{
    constructor(
        imageId = uuidv4(),
        itemId = "",
        url = "" ,
        htmlContent = ""
    ){
        this.imageId = imageId;
        this.itemId = itemId;
        this.url = url;
        this.htmlContent = htmlContent;
    }
}

export default ItemImagesModel;