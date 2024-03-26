const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonMaritalStatusSchema = new mongoose.Schema({ 
    maritalId:{
        type: String,
        unique:true,
        required: true,
    },
    maritalCode: String,
    maritalStatus: String,
    maritalCreatedBy: Number,
    maritalCreatedDate: String,
    maritalModifiedBy: Number,
    maritalModifiedDate: String,
    maritalIsDeleted: Number,
    maritalCultureId: Number

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonMaritalStatusSchema);