const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailEventSubjectSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    eventId: Number,
    eventActionId: Number,
    eventActionKey: String,
    eventSubject: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailEventSubjectSchema);