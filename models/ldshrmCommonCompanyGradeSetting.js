const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCompanyGradeSettingSchema = new mongoose.Schema({
    buGrLvId:{
        type: String,
        unique:true,
        required: true,
    },
    buGrLvBuId: Number,
    buGrLvGradeId: Number,
    buGrLvEmpStatusId: Number,
    buGrLvLeaveCalnDays: Number,
    buGrLvLeaveWorkDays: Number,
    buGrLvWorkingDaysInWeek: Number,
    buGrLvWeeksleave: Number,
    buGrLvTicketAfter: Number,
    buGrLvTicketClass: String,
    buGrLvFareCode: String,
    buGrLvMaximumTkts: Number,
    buGrLvOvertimeEligibility: String,
    buGrLvOvertimeFactor: String,
    buGrLvCreatedById: Number,
    buGrLvModifiedById: Number,
    buGrLvIsDeleted: Boolean,
    buGrLvCultureId: Number,
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
},
  { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCompanyGradeSettingSchema);