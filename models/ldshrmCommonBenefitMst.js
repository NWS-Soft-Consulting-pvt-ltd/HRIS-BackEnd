const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBenefitMstSchema = new mongoose.Schema({
    bnftId: Number,
    bnftName: String,
    bnftCode: String,
    bnftCreatedById: Number,
    bnftCreatedDate: String,
    bnftModifiedById: Number,
    bnftModifiedDate: String,
    bnftIsDeleted: Boolean

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBenefitMstSchema);