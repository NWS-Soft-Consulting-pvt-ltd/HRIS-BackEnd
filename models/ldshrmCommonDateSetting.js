const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDateSettingSchema = new mongoose.Schema({
    id: Number,
    dateFormat: String,
    dateFormatCode: Number,
    isdeleted: Boolean,
    dateConfigTimeFormat: String
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDateSettingSchema);