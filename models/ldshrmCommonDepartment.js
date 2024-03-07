const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDepartmentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    deptType: Number,
    segmentType: Number,
    depCharacteristicId: Number,
    shortDescription: String,
    workingHours: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean,
    cultureId: Number,
    tableName: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDepartmentSchema);