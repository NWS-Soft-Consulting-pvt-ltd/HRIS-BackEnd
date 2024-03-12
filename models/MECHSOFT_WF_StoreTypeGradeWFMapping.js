const mongoose = require("mongoose");
mongoose.pluralize(null);
const Schema = mongoose.Schema;

const MECHSOFT_WF_StoreTypeGradeWFMapping = mongoose.Schema(
  {
    Id: {
      type: Schema.TypesObjectID,
      unique: true,
      required: true,
      default: new mongoose.Types.ObjectId(),
    },
    storeTypeId: {
      type: Number,
      default: Null,
    },
    gradeId: {
      type: Number,

      default: Null,
    },
    requestId: {
      type: Number,
      default: Null,
    },
    workFlowId: {
      type: Number,
      default: Null,
    },
    createdById: {
      type: Number,
      default: Null,
    },
    createdDate: {
      type: Date,
      default: Null,
    },
    modifiedById: {
      type: Number,
      default: Null,
    },
    modifiedDate: {
      type: String,
      default: Null,
    },
    isDeleted: {
      type: Boolean,
      default: Null,
    },
    countryId: {
      type: Number,
      default: Null,
    },
    empTypeId: {
      type: Number,
      default: Null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "MECHSOFT_WF_StoreTypeGradeWFMapping",
  MECHSOFT_WF_StoreTypeGradeWFMapping
);
