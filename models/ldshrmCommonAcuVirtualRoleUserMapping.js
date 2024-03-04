const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuVirtualRoleUserMappingSchema = new mongoose.Schema({
    id: Number,
    virtualRoleId: Number,
    userId: Number,
    isActive: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuVirtualRoleUserMappingSchema);