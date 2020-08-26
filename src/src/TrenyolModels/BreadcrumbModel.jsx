import BreadcrumbItemModel from "./BreadcrumbItemModel";

class BreadcrumbModel{
    constructor(
        items = [BreadcrumbItemModel],
    ){
        this.items = items;
    }
}

export default BreadcrumbModel;