const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmpProfessionalDetailsSchema = new mongoose.Schema({
    empProfId:{
        type: String,
        unique:true,
        required: true,
    },
    empProfEmpId: Number,
    empProfCompName: String,
    empProfCompAddress: String,
    empProfReasonForLeave: String,
    empProfNameOfCEO: String,
    empProfContactName: String,
    empProfContactNumber: String,
    empProfContactPersonDesignation: String,
    empProfIsRefrenceVerified: Boolean,
    empProfSalary: Number,
    empProfDesignationbeforeLeaving: String,
    empProfJobResponsibility: String,
    empProfDateOfJoining: String,
    empProfDateOfLeaving: String,
    empProfCreatedById: Number,
    empProfCreatedDate: String,
    empProfModifiedById: Number,
    empProfModifiedDate: String,
    empProfIsDeleted: Boolean,
    empProfContactPersonEMailid: String,
    empProfCurrencyId: Number,
    empProfCultureId: Number,
    empProfCode: String,

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmpProfessionalDetailsSchema);