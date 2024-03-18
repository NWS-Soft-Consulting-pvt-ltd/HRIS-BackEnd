const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmpCarrefourDetailsSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    empId: Number,
    empSubsectionId: Number,
    mappingId: Number,
    designationMappingId: Number,
    empGradeId: Number,
    empLevelId: Number,
    isPrivatePayroll: Boolean,
    travelSector: Number,
    countryOfOrigin: Number,
    countryOfFirstContract: Number,
    futureManager: Number,
    uniqueDocId: Number,
    identificationNumber: String,
    salaryCodeId: Number,
    bankId: Number,
    accountNumber: String,
    empTeamMemberId: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    bankBranchId: Number,
    reportingBusinessUnitId: Number
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmpCarrefourDetailsSchema);