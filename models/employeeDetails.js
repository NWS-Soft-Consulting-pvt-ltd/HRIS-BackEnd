const mongoose = require("mongoose");
mongoose.pluralize(null);

const employeeDetailsSchema = new mongoose.Schema({
    bU: String,
    empNo: Number,
    name: String,
    dept: String,
    sect: String,
    design: String,
    grade: Number,
    level: String,
    nationality: String,
    type: String

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