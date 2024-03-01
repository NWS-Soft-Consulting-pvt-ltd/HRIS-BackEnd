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
    createdDate: String,
    modifiedDate: String,
    historyCreatedById: Number,
    historyCreatedDate: String 

  });

module.exports = mongoose.model("LoginDetails", acuActionAccessAuditSchema);