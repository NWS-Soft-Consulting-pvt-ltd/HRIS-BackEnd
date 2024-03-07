const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuRoleMasterSchema = new mongoose.Schema({
    iD: Number,
    role: String,
    description: String,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: String,
    code: String,
    wfRoleCode: String,
    isSectionRequired: String,
    isCountryRequired: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  acuRoleMasterSchema);