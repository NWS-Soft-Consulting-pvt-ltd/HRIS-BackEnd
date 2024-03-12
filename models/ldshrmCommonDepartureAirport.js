const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDepartureAirportSchema = new mongoose.Schema({
    depAirportId: String,
    depAirportName: String,
    depAirportCode: String,
    depAirportCountryId: Number,
    depAirportCreatedById: Number,
    depAirportCreatedDate: String,
    depAirportModifiedById: Number,
    depAirportModifiedDate: String,
    depAirportIsDeleted: Boolean,
    depAirportCultureId: Number,
    Column1: String,
    Column2: String,
    Column3: String,
    Column4: String,
    Column5: String,
    Column6: String,
    Column7: String,
    Column8: String,
    Column9: String,
    Column10: String,
    isActive: Boolean,
    cityId: Number,
    stateId: Number,

   });

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDepartureAirportSchema);