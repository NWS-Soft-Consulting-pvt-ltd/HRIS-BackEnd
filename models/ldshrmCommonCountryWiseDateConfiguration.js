const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseDateConfigurationSchema = new mongoose.Schema({
    dateConfigId: Number,
    dateConfigCountryId: Number,
    dateConfigDateFormat: String,
    dateConfigTimeFormat: String,
    dateConfigCultureId: Number,
    dateConfigTimeZoneCountryMapId: Number,
    dateConfigIsActive: Boolean,
    dateConfigDateFormatCode: String,
    dateConfigDBDateFormatCode: String,
    dateConfigCreatedById: Number,
    dateConfigCreatedDate: String,
    dateConfigModifiedById: Number,
    dateConfigModifiedDate: String,
    dateConfigIsDeleted: Boolean

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseDateConfigurationSchema);