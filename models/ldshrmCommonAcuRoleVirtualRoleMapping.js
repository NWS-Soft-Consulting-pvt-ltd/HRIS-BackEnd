const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuRoleVirtualRoleMappingSchema = new mongoose.Schema({
    roleId: Number,
    virtualRoleId:{
        type: String,
        unique:true,
        required: true,
    },
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuRoleVirtualRoleMappingSchema);