import CollectionModel from '../Models/CollectionModel';

export async function getCollection (Request){
    let response = await fetch("https://trendyolcollectionshareapp.herokuapp.com/Collection/GetData",
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(Request)
    });
    
    let data = await response.json();
    // let NewModel = Object.assign(new CollectionModel(),data);
    return data;
}

export async function saveCollection(Request){
    let response = await fetch("https://trendyolcollectionshareapp.herokuapp.com/Collection/Add",
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(Request)
    });
    let data = await response.json();
    return data;
}
