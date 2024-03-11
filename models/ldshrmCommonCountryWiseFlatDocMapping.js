const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseFlatDocMappingSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    cityId: Number,
    uniqueDocName: String,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    cultureId: Number
},
{ timestamps: true }
);
module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseFlatDocMappingSchema);