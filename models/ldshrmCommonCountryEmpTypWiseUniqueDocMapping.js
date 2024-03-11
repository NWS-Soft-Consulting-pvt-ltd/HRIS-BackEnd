const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryEmpTypWiseUniqueDocMappingSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    empCandTypeId: Number,
    uniqueDocId: Number,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    cultureId: Number
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryEmpTypWiseUniqueDocMappingSchema);