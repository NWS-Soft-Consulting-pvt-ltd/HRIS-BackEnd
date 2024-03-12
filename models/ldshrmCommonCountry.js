const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountrySchema = new mongoose.Schema({
    id: String,
    name: String,
    code: String,
    isOperatingCountry: Boolean,
    secondLanguageId: Number,
    currencyId: Number,
    probationDays: Number,
    createdById: Number,
    modifiedById: Number,
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
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountrySchema);