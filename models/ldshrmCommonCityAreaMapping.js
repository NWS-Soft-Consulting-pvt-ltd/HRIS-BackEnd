const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCityAreaMappingSchema = new mongoose.Schema({
    id: String,
    countryId: Number,
    cityId: Number,
    area: String,
    areaCode: String,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    cultureId: Number
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCityAreaMappingSchema);