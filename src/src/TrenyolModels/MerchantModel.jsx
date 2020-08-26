
class MerchantModel{
    constructor(
        id = 0,
        name = "",
        officialName = "",
        cityName = "",
        taxNumber = ""
    ){
        this.id = id;
        this.name = name;
        this.officialName = officialName;
        this.cityName = cityName;
        this.taxNumber = taxNumber;
    }
}

export default MerchantModel;