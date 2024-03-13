const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCountryWiseFlatDocMappingSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    countryId: Number,
    cityId: Number,
    uniqueDocName: String,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    cultureId: Number
},
{ timestamps: true }
);
module.exports = mongoose.model("LoginDetails",  ldshrmCommonCountryWiseFlatDocMappingSchema);