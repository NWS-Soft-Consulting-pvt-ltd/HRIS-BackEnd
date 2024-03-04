const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBankMasterSchema = new mongoose.Schema({
    bankId: Number,
    countryId: Number,
    bankName: String,
    bankCode: String,
    swiftCode: String,
    isActive: String,
    isUsedInBankTransferFile: String,
    createdById: Number,
    createdByEmpId: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedByEmpId: Number,
    modifiedDate: String,
    isDeleted: String,
    shortName: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBankMasterSchema);