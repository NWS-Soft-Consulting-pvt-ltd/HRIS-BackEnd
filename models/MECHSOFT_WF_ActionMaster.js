const mongoose = require("mongoose");
mongoose.plularize(null);
const Schema = mongoose.Schema;

const MECHSOFT_WF_ActionMaster = mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      require: true,
    },
    storeTypeId: {
      type: Number,
      default: null,
    },
    gradeId: {
      type: Number,
      default: null,
    },
    requestId: {
      type: Number,
      default: null,
    },
    workFlowId: {
      type: Number,
      default: null,
    },
    createdById: {
      type: Number,
      default: null,
    },
    createdDate: {
      type: Number,
      default: null,
    },
    modifiedById: {
      type: Number,
      default: null,
    },
    storeTypeId: {
      type: Number,
      default: null,
    },
    modifiedDate: {
      type: String,
      default: null,
    },
    isDeleted: {
      type: Boolean,
      default: null,
    },
    countryId: {
      type: Number,
      default: null,
    },
    empTypeId: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model(
  "MECHSOFT_WF_ActionMaster",
  MECHSOFT_WF_ActionMaster
);
