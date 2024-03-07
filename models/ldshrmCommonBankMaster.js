const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBankMasterSchema = new mongoose.Schema({
    bankId: Number,
    countryId: Number,
    bankName: String,
    bankCode: String,
    swiftCode: String,
    isActive: Boolean,
    isUsedInBankTransferFile: String,
    createdById: Number,
    createdByEmpId: Number,
    modifiedById: Number,
    modifiedByEmpId: Number,
    isDeleted: Boolean,
    shortName: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBankMasterSchema);