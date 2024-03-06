const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseEmpstatusMappingSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    fromEmpStatusId: Number,
    toEmpStatusId: Number,
    isDeleted: Boolean,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseEmpstatusMappingSchema);