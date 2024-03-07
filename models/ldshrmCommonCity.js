const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCitySchema = new mongoose.Schema({
    cityId: Number,
    cityName: String,
    cityCode: String,
    countryId: Number,
    stateId: Number,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCitySchema);