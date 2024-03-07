const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuRoleVirtualRoleMappingSchema = new mongoose.Schema({
    roleId: Number,
    virtualRoleId: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuRoleVirtualRoleMappingSchema);