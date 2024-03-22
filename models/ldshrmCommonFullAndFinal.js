const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonFullAndFinalSchema = new mongoose.Schema({
    fNFId:{
        type: String,
        unique:true,
        required: true,
    },
    empID:{
        type: String,
        unique:true,
        required: true,
    },
    endOfServiceType: Number,
    reasonId: Number,
    requestDate: String,
    lastWorkingDate: String,
    lastServiceDate: String,
    noticePeriod: Number,
    replacedEmpId: Number,
    adjustmentDays: Number,
    remark: String,
    statusId: Number,
    dPRequestID: Number,
    aPRequestID: Number,
    leaveActualBalance: Number,
    balanceForward: Number,
    accruedToDate: Number,
    leaveTaken: Number,
    payrollAvailableBalance: Number,
    inWorkFlow: Number,
    timeoffInLieuBalance: Number,
    gratuityAmount: Number,
    leaveSalaryAmount: Number,
    createdById: Number,
    modifiedById: Number,
    createdByEmpId: Number,
    modifiedByEmpId: Number,
    isDeleted: Boolean,
    businessUnitId: Number,
    departmentId: Number,
    sectionId: Number,
    designationId: Number,
    functionSkills: Number,
    gradeId: Number,
    levelId: Number,
    subSectionId: Number,
    isApproved: Boolean,
    isRejected: Boolean,
    isSentForApproval: Boolean,
    isProcessCompleted: Boolean,
    currencyID: Number,
    decimalPoint: Number,
    comment: String,
    isInApprovalWF: Boolean,
    isSynched: Boolean,
    commentsInFinal: String,
    netPay: Number,
    visaCancellationDate: String,
    cancellationComment: String,
    isCancelled: Boolean,
    cancellationDate: String,
    annualLeavePassage: Number,
    lastSalaryPeriod: Number,
    isSWAutoInitiated: Boolean,
    isSWAutoInitiateAttempted: Boolean,
    emailRecieverEmpidDP: Number,
    emailRecieverEmpidAP: Number,
    salaryPeriod: Number,
    isExcessLuggage: Boolean,
    exitReason: String,
    isExitInterviewDone: Number,
    newSalaryPeriod: Number

},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonFullAndFinalSchema);