const mongoose = require("mongoose");
mongoose.pluralize(null);

const hrAcademicYearSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    code: String,
    isCurrent: Boolean,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number 
},
   { timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  hrAcademicYearSchema);