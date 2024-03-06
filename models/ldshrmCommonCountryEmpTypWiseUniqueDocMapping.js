const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryEmpTypWiseUniqueDocMappingSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    empCandTypeId: Number,
    uniqueDocId: Number,
    isDeleted: Boolean,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    cultureId: Number

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryEmpTypWiseUniqueDocMappingSchema);