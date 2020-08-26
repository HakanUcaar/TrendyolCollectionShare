import {
    UPDATE_COLLECTION_DATA,
    READ_COLLECTION_DATA,
    SAVE_COLLECTION_DATA,
    LOADING_COLLECTION_DATA,
    LOADED_COLLECTION_DATA
}
from './ReduxActionContants';

export function loadingCollection(payload) {
    return { type: LOADING_COLLECTION_DATA, payload };
};

export function loadedCollection(payload) {
    return { type: LOADED_COLLECTION_DATA, payload };
};

export function updateCollection(payload) {
    return { type: UPDATE_COLLECTION_DATA, payload };
};

export function readCollection(payload) {
    return { type: READ_COLLECTION_DATA, payload };
};

export function saveCollection(payload) {
    return { type: SAVE_COLLECTION_DATA, payload };
};

