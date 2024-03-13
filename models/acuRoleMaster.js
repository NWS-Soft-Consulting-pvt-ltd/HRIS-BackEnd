const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuRoleMasterSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    role: String,
    description: String,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    code: String,
    wfRoleCode: String,
    isSectionRequired: Boolean,
    isCountryRequired: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  acuRoleMasterSchema);