const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDistrictSchema = new mongoose.Schema({
    id: String,
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