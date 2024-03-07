const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountrywiseSettingSchema = new mongoose.Schema({
    settId: Number,
    settCountryId: Number,
    settKeys: String,
    settValue: String,
    settKeysDescription: String,
    settIsDeleted: Boolean,
    settCreatedById: Number,
    settCreatedDate: String,
    settModifiedBy: Number,
    settModifiedDate: String,
    settCultureId: Number,
    settCode: String,
    column1: String,
    column2: String,
    column3: String,
    column4: String,
    column5: String,
    column6: String,
    column7: String,
    column8: String,
    column9: String,
    column10: String
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountrywiseSettingSchema);