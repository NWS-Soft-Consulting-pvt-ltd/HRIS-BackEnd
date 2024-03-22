const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEngagementTypeSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    code: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    employeeStatusId: Number
    
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEngagementTypeSchema);