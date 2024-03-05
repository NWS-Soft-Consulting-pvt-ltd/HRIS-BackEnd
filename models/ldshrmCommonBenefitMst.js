const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBenefitMstSchema = new mongoose.Schema({
    bnftId: Number,
    bnftName: String,
    bnftCode: String,
    bnftCreatedById: Number,
    bnftCreatedDate: String,
    bnftModifiedById: Number,
    bnft_ModifiedDate: String,
    bnft_IsDeleted: Boolean

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBenefitMstSchema);