const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBenefitMstSchema = new mongoose.Schema({
    bnftId:{
        type: String,
        unique:true,
        required: true,
    },
    bnftName: String,
    bnftCode: String,
    bnftCreatedById: Number,
    bnftModifiedById: Number,
    bnftIsDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBenefitMstSchema);