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
    historyCreatedById: Number,
    historyCreatedDate: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  acuPageActionDetailsAuditSchema);