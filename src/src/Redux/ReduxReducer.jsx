import {
    UPDATE_COLLECTION_DATA,
    READ_COLLECTION_DATA,
    SAVE_COLLECTION_DATA,
    LOADING_COLLECTION_DATA,
    LOADED_COLLECTION_DATA
}
from './ReduxActionContants';

import CollectionModel from '../Models/CollectionModel';
const CollectionServ = require('../Services/CollectionService');

const initialState = {
    MyCollection : new CollectionModel(),
    Link : "",
    IsFetching : false,
    IsReadCollectionData : false
};


function rootReducer (state = initialState, action) {
    switch(action.type){
        case UPDATE_COLLECTION_DATA:{
            return {
                ...state, MyCollection: action.payload,IsFetching:false
            }
        }
        case READ_COLLECTION_DATA:{
            return {
                ...state, MyCollection: action.payload,IsReadCollectionData:true,IsFetching:false,Link:action.payload.collectionId
            }         
        }
        case SAVE_COLLECTION_DATA:{
            let data = CollectionServ.saveCollection(state.MyCollection);
            console.log(data);
            return {
                ...state, MyCollection: new CollectionModel(),IsFetching:false,Link:"",IsReadCollectionData:false
            }
        }   
        case LOADING_COLLECTION_DATA:{
            return {
                ...state, IsFetching: true
            }
        }
        case LOADED_COLLECTION_DATA:{
            return {
                ...state, IsFetching: false
            }
        }        
        default: return state;
    }
}

export default rootReducer;