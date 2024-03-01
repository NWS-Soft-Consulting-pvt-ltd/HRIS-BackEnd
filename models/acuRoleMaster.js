const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuRoleMasterSchema = new mongoose.Schema({
    iD: Number,
    role: String,
    description: String,
    isActive: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: String,
    code: String,
    wfRoleCode: String,
    isSectionRequired: String,
    isCountryRequired: String

});

module.exports = mongoose.model("LoginDetails",  acuRoleMasterSchema);