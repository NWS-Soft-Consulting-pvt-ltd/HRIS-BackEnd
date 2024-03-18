const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmployeeAssetDetailsSchema = new mongoose.Schema({
    empAssetId:{
        type: String,
        unique:true,
        required: true,
    },
    empAssetEmpId: Number,
    empAssetAssDetailId: Number,
    empAssetTakenDate: String,
    empAssetReturnDate: String,
    empAssetReason: String,
    empAssetActualReturnDate: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmployeeAssetDetailsSchema);