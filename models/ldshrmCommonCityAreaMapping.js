const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCityAreaMappingSchema = new mongoose.Schema({
    id: Number,
    countryId: Number,
    cityId: Number,
    area: String,
    areaCode: String,
    isDeleted: Boolean,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    cultureId: Number
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCityAreaMappingSchema);