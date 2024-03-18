const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmployeeFamilyDetailsSchema = new mongoose.Schema({
    empFMId:{
        type: String,
        unique:true,
        required: true,
    },
    empFMEmployeeId:{
        type: String,
        unique:true,
        required: true,
    },
    empFMRelationId:{
        type: String,
        unique:true,
        required: true,
    },
    empFMSrNo: Number,
    empFMFname: String,
    empFMMname: String,
    empFMLname: String,
    empFMDOB: String,
    empFMOccupation: String,
    empFMCreatedById: Number,
    empFMCreatedDate: String,
    empFMModifiedById: Number,
    empFMModifiedDate: String,
    empFMIsDeleted: Number,
    empFMMaritalStatus: Number,
    empFMCountryDesignation: String,
    empFMNationality: Number,
    empFMSecondLangName: String,
    empFMIsBenefitOverride: Boolean,
    empFMTitle: Number,
    empFMReferanceComment: String,
    empFMGenderId: Number,
    empFMTicketEligibilty: Boolean,
    empFMInsurance: Boolean,
    empFMSchooling: Boolean,
    empFMClass: String,
    column1: String,
    column2: String,
    column3: String,
    column4: String,
    column5: String,
    column6: String,
    column7: String,
    column8: String,
    column9: String,
    column10: String,
    empFMImagePath: String,
    empFMImageName: String,
    empFmEmployerInfo: String,
    empFMSynchFlag: String,
    empFmSchoolingGrade: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmployeeFamilyDetailsSchema);