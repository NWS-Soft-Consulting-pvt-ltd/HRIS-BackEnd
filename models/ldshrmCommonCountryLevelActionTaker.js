const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryLevelActionTakerSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    countryId: Number,
    roleId: Number,
    empId: Number,
    remark: String,
    isDeleted: Boolean,
    createdById: Number,
    createdByEmpId: Number,
    modifiedById: Number,
    modifiedByEmpId: Number
},
   { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryLevelActionTakerSchema);