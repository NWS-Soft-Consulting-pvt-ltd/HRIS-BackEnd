const mongoose = require("mongoose");

mongoose.pluralize(null);
const Schema = mongoose.Schema;


const MECHSOFT_WF_StepStatusAction = mongoose.Schema(
  {
    Id: {
      type: Schema.TYpes.ObjectID,
      required: true,
      unique: true,
      default: new mongoose.Types.ObjectId(),
    },

    statusId: {
      type: Number,
      default: Null,
    },
    actionId: {
      type: Number,
      default: Null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "MECHSOFT_WF_StepStatusAction",
  MECHSOFT_WF_StepStatusAction
);
