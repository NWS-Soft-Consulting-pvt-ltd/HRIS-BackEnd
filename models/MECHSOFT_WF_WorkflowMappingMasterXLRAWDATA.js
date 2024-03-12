const mongoose = require("mongoose");

mongoose.pluralize(null);
const Schema = mongoose.Schema;

const MECHSOFT_WF_WorkflowMappingMasterXLRAWDATA = mongoose.Schema(
  {
    Id: {
      type: ObjectId,
      unique: true,
      required: true,
    },
    wFName: {
      type: String,
      required: true,
    },
    requestId: {
      type: Number,
      default: Null,
    },
    countryId: {
      type: Number,
      default: Null,
    },
    storeTypeId: {
      type: Number,
      default: Null,
    },
    empTypeId: {
      type: Number,
      default: Null,
    },
    typeId: {
      type: Number,
      default: Null,
    },
    gradeFrom: {
      type: String,
      default: Null,
    },
    gradeTo: {
      type: String,
      default: Null,
    },
    value1: {
      type: Number,
      default: Null,
    },
    value2: {
      type: Number,
      default: Null,
    },
    workflowId: {
      type: Number,
      default: Null,
    },
    startDate: {
      type: Date,
      default: Null,
    },
    endDate: {
      type: Date,
      default: Null,
    },
    createdById: {
      type: Number,
      default: Null,
    },
    modifiedById: {
      type: Number,
      default: Null,
    },

    isDeleted: {
      type: Boolean,
      default: Null,
    },
    statusId: {
      type: Number,
      default: Null,
    },
    createdByEmpId: {
      type: Number,
      default: Null,
    },
    modifiedByEmpId: {
      type: Number,
      default: Null,
    },
    batchCode: {
      type: Number,
      default: Null,
    },
    entryAs: {
      type: String,
      default: Null,
    },
    wF01CodeID: {
      type: Number,
      default: Null,
    },
    wF01AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF01Editable: {
      type: Boolean,
      default: Null,
    },
    wF02CodeID: {
      type: Number,
      default: Null,
    },
    wF02AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF02Editable: {
      type: Boolean,
      default: Null,
    },
    wF03CodeID: {
      type: Number,
      default: Null,
    },
    wF03AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF03Editable: {
      type: Boolean,
      default: Null,
    },
    wF04CodeID: {
      type: Number,
      default: Null,
    },
    wF04AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF04Editable: {
      type: Boolean,
      default: Null,
    },
    wF05CodeID: {
      type: Number,
      default: Null,
    },
    wF05AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF05Editable: {
      type: Boolean,
      default: Null,
    },
    wF06CodeID: {
      type: Number,
      default: Null,
    },
    wF06AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF06Editable: {
      type: Boolean,
      default: Null,
    },
    wF07CodeID: {
      type: Number,
      default: Null,
    },
    wF07AssignCodeID: {
      type: Number,
      default: Null,
    },
    wF07Editable: {
      type: Boolean,
      default: Null,
    },
    wF07CodeID: {
      type: Number,
      default: Null,
    },
    dummyId: {
      type: Number,
      required: true,
    },
    stepCount: {
      type: Number,
      default: Null,
    },
    wFTypeCode: {
      type: String,
      default: Null,
    },
    wFTypeName: {
      type: String,
      default: Null,
    },
    wF07CodeID: {
      type: Number,
      default: Null,
    },
    isApplicableORU: {
      type: Boolean,
      default: Null,
    },
    wF01IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
    wF02IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
    wF03IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
    wF04IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
    wF05IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
    wF06IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
    wF07IsEmailApprove: {
      type: Boolean,
      default: Null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "MECHSOFT_WF_WorkflowMappingMasterXLRAWDATA",
  MECHSOFT_WF_WorkflowMappingMasterXLRAWDATA
);
