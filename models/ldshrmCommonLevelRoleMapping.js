const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonLevelRoleMappingSchema = new mongoose.Schema({ 
    id:{
        type: String,
        unique:true,
        required: true,
    },
    levelId:{
        type: String,
        required: true,
    },
    roleId:{
        type: String,
        required: true,
    },
    isDeleted: Boolean,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonLevelRoleMappingSchema);