const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageActionDetailsAuditSchema = new mongoose.Schema({
    historyId: Number,
    pageActionDetailsID: Number,
    pageID: Number,
    actionID: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    createdDate: String,
    modifiedDate: String,
    historyCreatedById: Number,
    historyCreatedDate: String

   
});

module.exports = mongoose.model("LoginDetails",  acuPageActionDetailsAuditSchema);