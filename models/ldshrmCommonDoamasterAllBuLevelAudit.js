const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDoamasterAllBuLevelAuditSchema = new mongoose.Schema({
    auditId:{
        type: String,
        unique:true,
        required: true,
    },
    id: Number,
    moduleId: Number,
    businessUnitId: Number,
    wfRoleCode: String,
    wfRoleName: String,
    employeeId: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    wfRoleId: Number,
    auditCreatedById: Number,
    auditCreatedDate: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDoamasterAllBuLevelAuditSchema);