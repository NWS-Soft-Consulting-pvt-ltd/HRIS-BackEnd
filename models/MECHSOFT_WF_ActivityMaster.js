const mongoose = require("mongoose");

mongoose.Pluralize(null);
const Schema = mongoose.Schema;

const MECHSOFT_WF_ActivityMaster=  mongoose.Schema(
  {
    id: {
      type: Schema.Types.objectId,
      unique: true,
      require: true,
      default: new mongoose.Types.ObjectId(),
    },
    StepId: {
      type: Number,
   default:null,
    },
    ActionId: {
      type: Number,
   default:null,
    },
    StatusId: {
      type: Number,
   default:null,
    },
    NextStepId: {
      type: Number,
   default:null,
    },
    PrevStepId: {
      type: Number,
   default:null,
    },
    AHT: {
      type: Number,
   default:null,
    },
    ThresholdTime: {
      type: Number,
   default:null,
    },
    RoleId: {
      type: Number,
   default:null,
    },
    DesignationId: {
      type: Number,
   default:null,
    },
    IsRecursive: {
      type: Boolean,
   default:null,
    },
    WFId: {
      type: Number,
   default:null,
    },
    AssignTo: {
      type: Boolean,
   default:null,
    },
    GroupId: {
      type: Number,
   default:null,
    },
    NotificationId: {
      type: Number,
   default:null,
    },
    AlertId: {
      type: Number,
   default:null,
    },
    EmailMessageId: {
      type: Number,
   default:null,
    },
    CreatedDate: {
      type: Date,
   default:null,
    },
    ModifiedDate: {
      type: Date,
   default:null,
    },
    IsEditable: {
      type: Boolean,
   default:null,
    },
    IsDeleted: {
      type: Boolean,
   default:null,
    },
    IsMailThroughApproval: {
      type: Boolean,
   default:null,
    },
    IsOneStepBack: {
      type: Boolean,
   default:null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "MECHSOFT_WF_ActivityMaster",
  MECHSOFT_WF_ActivityMaster
);
