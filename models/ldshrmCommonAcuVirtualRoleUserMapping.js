const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuVirtualRoleUserMappingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    virtualRoleId: Number,
    userId: Number,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuVirtualRoleUserMappingSchema);