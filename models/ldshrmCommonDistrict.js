const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDistrictSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    code: String,
    shortDescription: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    tableName: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDistrictSchema);