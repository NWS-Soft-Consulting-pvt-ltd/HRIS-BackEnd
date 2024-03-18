const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmpFamilyDocumentsSchema = new mongoose.Schema({
    empFMId:{
        type: String,
        unique:true,
        required: true,
    },
    empFMDocId:{
        type: String,
        unique:true,
        required: true,
    },
    empId: Number,
    empFMEmpRelationId: Number,
    empFMDocumentNumber: String,
    empFMExpiryDate: String,
    empFMIssueDate: String,
    empFMNatiomOfIssuence: Number,
    empFMCancelledDate: String,
    empFMPersonalNumber: String,
    empFMFilePath: String,
    empFMCreatedById: Number,
    empFMCreatedDate: String,
    empFMModifiedById: Number,
    empFMModifiedDate: String,
    empFMIsDeleted: Boolean,
    empFMCultureId: Number,
    empFMFileName: String,
    empFMSrNo: Number,
    empFMIsActive: Boolean,
    verified: Boolean,
    verifiedByEmpId: Number,
    verifiedDate: String,
    actualFileName: String,
    empFMIsNewDoc: Boolean

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmpFamilyDocumentsSchema);