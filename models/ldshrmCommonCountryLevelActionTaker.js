const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryLevelActionTakerSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    roleId: Number,
    empId: Number,
    remark: String,
    isDeleted: Boolean,
    createdById: Number,
    createdByEmpId: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    modifiedByEmpId: Number

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryLevelActionTakerSchema);