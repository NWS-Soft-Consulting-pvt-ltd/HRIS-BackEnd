const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuAccessAuditSchema = new mongoose.Schema({
    historyId:{
        type: String,
        unique:true,
        required: true,
        },
    accessID: Number,
    accessFor: Number,
    accessTypeID: Number,
    pageID: Number,
    isActive:{
        type: Boolean,
        required: true,
        },
    createdById: Number,
    modifiedById: Number,
    historyCreatedById: Number,
    historyCreatedDate:String
    },
    { timestamps: true }

   );

module.exports = mongoose.model("LoginDetails",  acuAccessAuditSchema);