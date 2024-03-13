const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseDateConfigurationSchema = new mongoose.Schema({
    dateConfigId:{
        type: String,
        unique:true,
        required: true,
    },
    dateConfigCountryId: Number,
    dateConfigDateFormat: String,
    dateConfigTimeFormat: String,
    dateConfigCultureId: Number,
    dateConfigTimeZoneCountryMapId: Number,
    dateConfigIsActive: Boolean,
    dateConfigDateFormatCode: String,
    dateConfigDBDateFormatCode: String,
    dateConfigCreatedById: Number,
    dateConfigModifiedById: Number,
    dateConfigIsDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseDateConfigurationSchema);