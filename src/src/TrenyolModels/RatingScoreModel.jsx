
class RatingScoreModel{
    constructor(
        averageRating = 0.0,
        totalRatingCount = 0,
        totalCommentCount = 0
    ){
        this.averageRating = averageRating;
        this.totalRatingCount = totalRatingCount;
        this.totalCommentCount = totalCommentCount;
    }
}

export default RatingScoreModel;