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
    historyCreatedById: Number,
    historyCreatedDate:String
    },
    { timestamps: true }

   );

module.exports = mongoose.model("LoginDetails",  acuAccessAuditSchema);