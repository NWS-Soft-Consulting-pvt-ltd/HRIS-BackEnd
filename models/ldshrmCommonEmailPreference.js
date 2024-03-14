const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailPreferenceSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    eventId: Number,
    alertTypeId: Number,
    templateId: Number,
    roleId: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted:{
        type: Boolean,
        required: true,
    },
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailPreferenceSchema);