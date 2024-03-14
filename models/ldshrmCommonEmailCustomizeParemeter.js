const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailCustomizeParemeterSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    parameterText: String,
    parameter: String,
    isDeleted:{
        type: Boolean,
        required: true,
    },
    eventId: Number
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailCustomizeParemeterSchema);