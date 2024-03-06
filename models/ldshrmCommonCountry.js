const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountrySchema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    isOperatingCountry: Boolean,
    secondLanguageId: Number,
    currencyId: Number,
    probationDays: Number,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean,
    cultureId: Number,
    tableName: String,
    uniqueDocId: Number,
    noticePeriod: Number,
    shortName: String,
    countryLogo1File: String,
    countryLogo2File: String,
    address: String,
    contact: String,
    faxNo: String,
    mobCountryCode: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountrySchema);