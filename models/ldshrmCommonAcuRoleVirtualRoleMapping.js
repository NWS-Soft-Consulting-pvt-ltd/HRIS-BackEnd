const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuRoleVirtualRoleMappingSchema = new mongoose.Schema({
    roleId: Number,
    virtualRoleId: Number,
    isActive: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: String 

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuRoleVirtualRoleMappingSchema);