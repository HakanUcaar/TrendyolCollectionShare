
class CampaignModel{
    constructor(
        id = 0,
        name = "",
        startDate = new Date(),
        endDate = new Date(),
        isMultipleSupplied = false,
        stockTypeId = 0,
        url = "",
        showTimer = false
    ){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isMultipleSupplied = isMultipleSupplied;
        this.stockTypeId = stockTypeId;
        this.url = url;
        this.showTimer = showTimer;
    }
}

export default CampaignModel;