const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuActionAccessAuditSchema = new mongoose.Schema({
  historyId:{
    type: String,
    unique:true,
    required: true,
    },
    actionAccessID: Number,
    accessID: Number,
    actionID: Number,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
    historyCreatedById: Number,
    historyCreatedDate: String 
},
  { timestamps: true }
  
  );

module.exports = mongoose.model("LoginDetails", acuActionAccessAuditSchema);