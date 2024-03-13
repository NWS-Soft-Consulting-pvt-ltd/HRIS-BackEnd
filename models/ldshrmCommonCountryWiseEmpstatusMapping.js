const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseEmpstatusMappingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    countryId: Number,
    fromEmpStatusId: Number,
    toEmpStatusId: Number,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseEmpstatusMappingSchema);