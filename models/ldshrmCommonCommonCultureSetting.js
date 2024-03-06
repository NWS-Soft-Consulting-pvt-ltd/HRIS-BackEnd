const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCommonCultureSettingSchema = new mongoose.Schema({
    id: Number,
    keys: String,
    name: String,
    secondLangName: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean,
    cultureId: Number
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCommonCultureSettingSchema);