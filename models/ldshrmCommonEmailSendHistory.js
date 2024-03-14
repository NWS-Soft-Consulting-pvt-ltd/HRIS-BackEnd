const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailSendHistorySchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    moduleId: Number,
    instanceId: Number,
    eventName: String,
    emailTo: String,
    emailCC: String,
    subject: String,
    attachment: String,
    emailText: String,
    emailDate: String,
    status: String,
    emailFrom: String,
    createdById: Number,
    modifiedById: Number,
    isActive: Boolean,
    isDeleted: Boolean,
    businessUnitId: Number
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailSendHistorySchema);