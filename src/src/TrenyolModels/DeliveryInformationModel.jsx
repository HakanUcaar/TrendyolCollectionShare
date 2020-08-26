
class DeliveryInformationModel{
    constructor(
        isRushDelivery = false,
        deliveryDate = new Date(),
    ){
        this.isRushDelivery = isRushDelivery;
        this.deliveryDate = deliveryDate;
    }
}

export default DeliveryInformationModel;