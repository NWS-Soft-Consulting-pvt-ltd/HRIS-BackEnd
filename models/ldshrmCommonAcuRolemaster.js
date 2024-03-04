const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuRolemasterSchema = new mongoose.Schema({
    id: Number,
    role: String,
    description: String,
    isActive: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: String,
    code: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuRolemasterSchema);