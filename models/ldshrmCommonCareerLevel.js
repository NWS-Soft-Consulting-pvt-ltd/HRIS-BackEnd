const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCareerLevelSchema = new mongoose.Schema({
    id: Number,
    name: String,
    shortName: String,
    code: String,
    isActive: Boolean,
    isDeleted: Boolean,
    createdBy: Number,
    createdDate: String,
    modifiedBy: Number,
    modifiedDate: String
   
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCareerLevelSchema);