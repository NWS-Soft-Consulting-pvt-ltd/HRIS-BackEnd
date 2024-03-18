const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmailTemplateMasterSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    templateContent: String,
    customizeFields: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmailTemplateMasterSchema);