const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuVirtualRoleUserMappingSchema = new mongoose.Schema({
    id: Number,
    virtualRoleId: Number,
    userId: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuVirtualRoleUserMappingSchema);