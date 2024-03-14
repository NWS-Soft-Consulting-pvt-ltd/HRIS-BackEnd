const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDoaMasterHigherLevel20230213Schema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    countryId: Number,
    businessUnitTypId: Number,
    wfRoleCode: String,
    hierarchyId: Number,
    employeeId: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    tSCOCD: String,
    tSOPCO: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDoaMasterHigherLevel20230213Schema);