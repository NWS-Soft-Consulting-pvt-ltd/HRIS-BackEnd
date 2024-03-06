const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseFlatDocMappingSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    cityId: Number,
    uniqueDocName: String,
    isDeleted: Boolean,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    cultureId: Number

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseFlatDocMappingSchema);