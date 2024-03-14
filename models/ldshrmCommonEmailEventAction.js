const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailEventActionSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    eventAction: String,
    eventActionKey: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailEventActionSchema);