const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAcuRolemasterSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    role: String,
    description: String,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    code: String
},
{ timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAcuRolemasterSchema);