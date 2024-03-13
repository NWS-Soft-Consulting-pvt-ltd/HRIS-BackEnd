const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryEmpTypWiseUniqueDocMappingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    countryId: Number,
    empCandTypeId: Number,
    uniqueDocId: Number,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    cultureId: Number
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryEmpTypWiseUniqueDocMappingSchema);