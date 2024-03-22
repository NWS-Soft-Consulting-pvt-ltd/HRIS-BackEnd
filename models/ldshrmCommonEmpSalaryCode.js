const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmpSalaryCodeSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    code: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails", ldshrmCommonEmpSalaryCodeSchema);