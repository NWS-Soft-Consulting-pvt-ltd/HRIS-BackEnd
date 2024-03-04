const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBankSchema = new mongoose.Schema({
    id: Number,
    bankName: String,
    code: String,
    shortDescription: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: String,
    cultureId: Number,
    countryId: Number
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBankSchema);