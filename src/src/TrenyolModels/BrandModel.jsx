
class BrandModel{
    constructor(
        id = 0,
        name = "",
        isVirtual = false,
        beautifiedName = ""
    ){
        this.id = id;
        this.name = name;
        this.isVirtual = isVirtual;
        this.beautifiedName = beautifiedName;          
    }
}

export default BrandModel;