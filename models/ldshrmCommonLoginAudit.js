const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonLoginAuditSchema = new mongoose.Schema({ 
    audId:{
        type: String,
        unique:true,
        required: true,
    },
    virtualRoleId: Number,
    lastLogin: String,
    lastLogOut: String,
    isOnline: Boolean,
    workStationId: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonLoginAuditSchema);