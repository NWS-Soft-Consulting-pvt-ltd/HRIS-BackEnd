const mongoose = require("mongoose");
mongoose.pluralize(null);
const Schema = mongoose.Schema;

const MECHSOFT_WF_RequestMaster = mongoose.Schema(
  {
    requestID: {
      type: Schema.Types.ObjectId,
      require: true,
      unique: true,
    },
    requestName: {
      type: String,
      required: true,
    },
    requestTableName: {
      type: String,
      default: null,
    },
    masterRequestId: {
      type: Number,
      default: null,
    },
    masterRequestName: {
      type: String,
      default: null,
    },
    requestCode: {
      type: String,
      default: null,
    },
    requestDescription: {
      type: String,
      default: null,
    },
    moduleId: {
      type: Number,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
    documentTableName: {
      type: String,
      default: null,
    },
    documentColumnName: {
      type: String,
      default: null,
    },
    documentColumnId: {
      type: String,
      default: null,
    },
    documentColumnCode: {
      type: String,
      default: null,
    },
    isValueEditable: {
      type: Boolean,
      default: null,
    },
    isTypeEditable: {
      type: Boolean,
      default: null,
    },
    isEmpTypeEditable: {
      type: Boolean,
      default: null,
    },
    isAssignWF: {
      type: Boolean,
      default: null,
    },
    isEditableWF: {
      type: Boolean,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "MECHSOFT_WF_RequestMaster",
  MECHSOFT_WF_RequestMaster
);
