const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDateSettingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    dateFormat: String,
    dateFormatCode: Number,
    isdeleted: Boolean,
    dateConfigTimeFormat: String
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDateSettingSchema);