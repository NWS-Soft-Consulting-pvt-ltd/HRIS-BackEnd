const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDocumentMasterSchema = new mongoose.Schema({
    documentId:{
        type: String,
        unique:true,
        required: true,
    },
    documentName: String,
    documentCode: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    isEmpDisplay: Boolean,
    isEmpRenew: Boolean,
    noActionRequired: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDocumentMasterSchema);