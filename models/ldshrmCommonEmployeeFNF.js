const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmployeeFNFSchema = new mongoose.Schema({
    empFNFId:{
        type: String,
        unique:true,
        required: true,
    },
    empFNFEmpId: Number,
    empFNFExitTypeId: Number,
    empFNFExitReasonId: Number,
    empFNFExitInitiateOn: String,
    empFNFDOL: String,
    empFNFRemark: String,
    empFNFCancelRemark: String,
    empFNFIsSentForApproval: Boolean,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmployeeFNFSchema);