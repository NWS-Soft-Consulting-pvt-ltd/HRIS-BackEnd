const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuActionAccessAuditSchema = new mongoose.Schema({
    historyId: Number,
    actionAccessID: Number,
    accessID: Number,
    actionID: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    historyCreatedById: Number,
    historyCreatedDate: String 
},
  { timestamps: true }
  
  );

module.exports = mongoose.model("LoginDetails", acuActionAccessAuditSchema);