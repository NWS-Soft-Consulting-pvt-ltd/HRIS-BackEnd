const mongoose = require("mongoose");

mongoose.pluralize(null);
const Schema = mongoose.Schema;

const MECHSOFT_WF_WorkflowMappingMaster = mongoose.Schema(
  {
    Id: {
      type: ObjectId,
      unique: true,
      required: true,
      default: new mongoose.Types.ObjectId(),
    },
    wFName: { type: String, default: Null },
    requestId: { type: Number, default: Null },
    countryId: { type: String, default: Null },
    storeTypeId: { type: String, default: Null },
    empTypeId: { type: String, default: Null },
    typeId: { type: String, default: Null },
    GradeFrom: { type: String, default: Null },
    gradeTo: { type: String, default: Null },
    value1: { type: Boolean, default: Null },
    value2: { type: Boolean, default: Null },
    workflowId: { type: String, default: Null },
    startDate: { type: Date, default: Null },
    endDate: { type: Date, default: Null },
    createdById: { type: Number, default: Null },
    createdDate: { type: Date, default: Null },
    modifiedById: { type: Number, default: Null },
    modifiedDate: { type: String, default: Null },
    isDeleted: { type: Boolean, default: Null },
    statusId: { type: Number, default: Null },
    createdByEmpId: { type: Number, default: Null },
    modifiedByEmpId: { type: Number, default: Null },
    batchCode: { type: Number, default: Null },
    stepCount: { type: Number, default: Null },
    isApplicableORU: { type: Boolean, default: Null },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "MECHSOFT_WF_WorkflowMappingMaster",
  MECHSOFT_WF_WorkflowMappingMaster
);
