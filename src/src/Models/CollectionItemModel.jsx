import { v4 as uuidv4 } from 'uuid';

class CollectionItemModel{
    constructor(
        itemId = uuidv4(),
        collectionId = "",
        itemName = "",
        itemDescription = "",
        price = 0,
        url = "",
        favoriteCount = 0,
        gender = "",
        totalRatingCount = 0,
        averageRating = 0.0,
        totalCommentCount = 0,
        merchantName = "",
        merchantOfficialName = "",
        itemImages = []
    ){
        this.itemId = itemId;
        this.collectionId = collectionId;
        this.itemName = itemName;          
        this.itemDescription = itemDescription;
        this.price = price;
        this.url = url;
        this.favoriteCount = favoriteCount;
        this.gender = gender;
        this.totalRatingCount = totalRatingCount;
        this.averageRating = averageRating;
        this.totalCommentCount = totalCommentCount;
        this.merchantName = merchantName;
        this.merchantOfficialName = merchantOfficialName;
        this.itemImages = itemImages;
    }
}

export default CollectionItemModel;