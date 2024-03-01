const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuAccessAuditSchema = new mongoose.Schema({
    historyId: Number,
    accessID: Number,
    accessFor: Number,
    accessTypeID: Number,
    pageID: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    createdDate: String,
    modifiedDate: String,
    historyCreatedById: Number,
    historyCreatedDate:String

   });

module.exports = mongoose.model("LoginDetails",  acuAccessAuditSchema);