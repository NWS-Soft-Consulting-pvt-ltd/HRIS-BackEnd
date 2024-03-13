const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCommonCultureSettingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    keys:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    secondLangName: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCommonCultureSettingSchema);