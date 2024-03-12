const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDepartmentSchema = new mongoose.Schema({
    id: String,
    name: String,
    code: String,
    deptType: Number,
    segmentType: Number,
    depCharacteristicId: Number,
    shortDescription: String,
    workingHours: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    tableName: String
    
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDepartmentSchema);