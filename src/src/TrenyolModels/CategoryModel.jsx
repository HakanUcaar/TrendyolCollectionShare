
class CategoryModel{
    constructor(
        id = 0,
        name = "",
        hierarchy = "",
        refundable = false,
        beautifiedName = ""
    ){
        this.id = id;
        this.name = name;
        this.hierarchy = hierarchy;
        this.refundable = refundable;
        this.beautifiedName = beautifiedName;          
    }
}

export default CategoryModel;