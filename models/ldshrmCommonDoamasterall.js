const mongoose = require("mongoose");
mongoose.pluralize(null);

const employeeDetailsSchema = new mongoose.Schema({
    id: String,
    moduleId: Number,
    gradeId: Number,
    actionId: Number,
    storeTypeId: Number,
    designationId: Number,
    startDate: String,
    endDate: String,
    roleId: Number,
    

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