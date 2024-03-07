const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuRolemasterSchema = new mongoose.Schema({
    id: Number,
    role: String,
    description: String,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: String,
    code: String
},
{ timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuRolemasterSchema);