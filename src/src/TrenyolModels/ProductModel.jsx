import CampaignModel from './CampaignModel';
import CategoryModel from './CategoryModel';
import BrandModel from './BrandModel';
import MetaBrandModel from './MetaBrandModel';
import GenderModel from './GenderModel';
import PriceModel from './PriceModel';
import MerchantModel from './MerchantModel';
import DeliveryInformationModel from './DeliveryInformationModel';
import RatingScoreModel from './RatingScoreModel';
import BreadcrumbModel from './BreadcrumbModel';

class ProductModel{
    constructor(
        id = 0 ,
        attributes = [],
        alternativeVariants = [],
        variants = [],
        otherMerchants = [],
        campaign = new CampaignModel(),
        category = new CategoryModel(),
        brand = new BrandModel(),
        color = "",
        showVariants = false,
        showSexualContent = false,
        metaBrand = new MetaBrandModel(),
        productCode = "",
        name = "",
        nameWithProductCode = "",
        description = "",
        productGroupId = 0,
        tax = 0,
        businessUnit = "",
        gender = new GenderModel(),
        url = "",
        images = [],
        isSellable = false,
        isBasketDiscount = false,
        hasStock = false,
        price = new PriceModel(),
        isFreeCargo = false,
        promotions = [],
        merchant = new MerchantModel(),
        deliveryInformation = new DeliveryInformationModel(),
        isMarketplace = false,        productStamps = [],
        hasHtmlContent = false,
        favoriteCount = 0,
        uxLayout = "",
        isDigitalGood = false,
        isRunningOut = false,
        scheduledDelivery = false,
        ratingScore = new RatingScoreModel(),
        showStarredAttributes = false,
        reviewsUrl = "",
        breadcrumb = new BreadcrumbModel()
    ){
        this.id = id;
        this.attributes = attributes;
        this.alternativeVariants = alternativeVariants;
        this.variants = variants;        
        this.otherMerchants = otherMerchants;
        this.campaign = campaign;
        this.category = category;
        this.brand = brand;
        this.color = color;
        this.showVariants = showVariants;
        this.showSexualContent = showSexualContent;
        this.metaBrand = metaBrand;
        this.productCode = productCode;
        this.name = name;
        this.nameWithProductCode = nameWithProductCode;
        this.description = description;
        this.productGroupId = productGroupId;
        this.tax = tax;
        this.businessUnit = businessUnit;
        this.gender = gender;        
        this.url = url;
        this.images = images;
        this.isSellable = isSellable;
        this.isBasketDiscount = isBasketDiscount;
        this.hasStock = hasStock;
        this.price = price;
        this.isFreeCargo = isFreeCargo;
        this.promotions = promotions;
        this.merchant = merchant;
        this.deliveryInformation = deliveryInformation;
        this.isMarketplace = isMarketplace;
        this.productStamps = productStamps;         
        this.hasHtmlContent = hasHtmlContent;
        this.favoriteCount = favoriteCount;
        this.uxLayout = uxLayout;
        this.isDigitalGood = isDigitalGood;        
        this.isRunningOut = isRunningOut;
        this.scheduledDelivery = scheduledDelivery;
        this.ratingScore = ratingScore;
        this.showStarredAttributes = showStarredAttributes;
        this.reviewsUrl = reviewsUrl;
        this.breadcrumb = breadcrumb;                             
    }
}

export default ProductModel;