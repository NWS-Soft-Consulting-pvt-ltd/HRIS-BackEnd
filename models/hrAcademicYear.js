const mongoose = require("mongoose");
mongoose.pluralize(null);

const hrAcademicYearSchema = new mongoose.Schema({
    iD: Number,
    name: String,
    code: String,
    isCurrent: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number 
},
   { timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  hrAcademicYearSchema);