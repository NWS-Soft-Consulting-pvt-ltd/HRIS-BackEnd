const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCitySchema = new mongoose.Schema({
    cityId: Number,
    cityName: String,
    cityCode: String,
    countryId: Number,
    stateId: Number,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean,
    cultureId: Number
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCitySchema);