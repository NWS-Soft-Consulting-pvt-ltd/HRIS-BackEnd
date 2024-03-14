const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDoamasterAllBuLevelSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    moduleId: Number,
    businessUnitId: Number,
    wfRoleCode: String,
    wfRoleName: String,
    employeeId: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    wfRoleId: Number,
    createdByEmpId: Number,
    modifiedByEmpId: Number,
    isActive:{
              type: Boolean,
              required: true
     },
     sectionId: Number,
     isDefaultUser: Boolean,
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDoamasterAllBuLevelSchema);