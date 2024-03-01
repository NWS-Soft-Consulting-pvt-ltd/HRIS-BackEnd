const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuAccessSchema = new mongoose.Schema({
    id: Number,
    accessFor: Number,
    accessTypeID: Number,
    pageID: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    createdDate: String,
    modifiedDate: String


    // qualification: String,
    // registrationNumber: String,
    // mobileNumber: Number,
    // doctorAddress: String,
    // doctorAddress: String,
    // vdid: String,
    // districtName: String,
    // emailAddress: String,
});

module.exports = mongoose.model("LoginDetails",  acuAccessSchema);