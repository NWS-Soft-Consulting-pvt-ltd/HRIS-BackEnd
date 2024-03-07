const mongoose = require("mongoose");
mongoose.pluralize(null);

const employeeDetailsSchema = new mongoose.Schema({
    depAirportId: Number,
    depAirportName: String,
    depAirportCode: String,
    depAirportCountryId: Number,
    depAirportCreatedById: Number,
    

    // qualification: String,
    // registrationNumber: String,
    // mobileNumber: Number,
    // doctorAddress: String,
    // doctorAddress: String,
    // vdid: String,
    // districtName: String,
    // emailAddress: String,
});

module.exports = mongoose.model("LoginDetails",  employeeDetailsSchema);