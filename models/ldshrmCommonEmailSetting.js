const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailSettingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    code: String,
    description: String,
    value: Boolean,
    moduleId: Number,
    isDeleted: String,
    createdById: Number,
    modifiedById: Number,
    cultureId: Number,
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
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailSettingSchema);