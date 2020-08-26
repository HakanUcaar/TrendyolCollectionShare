import { v4 as uuidv4 } from 'uuid';

class CollectionModel{
    constructor(
        collectionId = uuidv4(),
        name = "",
        collectionItem = []
    ){
        this.collectionId = collectionId;
        this.name = name;
        this.collectionItem = collectionItem;
    }
}

export default CollectionModel;