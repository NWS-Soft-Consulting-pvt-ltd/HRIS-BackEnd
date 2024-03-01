const mongoose = require("mongoose");
mongoose.pluralize(null);

const hrAcademicYearSchema = new mongoose.Schema({
    iD: Number,
    name: String,
    code: String,
    isCurrent: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: String,
    cultureId: Number 

});

module.exports = mongoose.model("LoginDetails",  hrAcademicYearSchema);