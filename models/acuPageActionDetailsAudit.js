const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageActionDetailsAuditSchema = new mongoose.Schema({
    historyId:{
        type: String,
        unique:true,
        required: true,
        },
    pageActionDetailsID: Number,
    pageID: Number,
    actionID: Number,
    isActive:{
        type: Boolean,
        required: true,
        },
    createdById: Number,
    modifiedById: Number,
    historyCreatedById: Number,
    historyCreatedDate: String
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  acuPageActionDetailsAuditSchema);