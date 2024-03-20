const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmployeeProposedSalarySchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    employeeId: Number,
    specialChangeId: Number,
    specialChangeTypeId: Number,
    salaryCodeId: Number,
    amount: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmployeeProposedSalarySchema);