const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmpCostCenterSchema = new mongoose.Schema({
    empId:{
        type: String,
        unique:true,
        required: true,
    },
    employeeCode: Number,
    eMECNO: String,
    costCenter: String
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmpCostCenterSchema);