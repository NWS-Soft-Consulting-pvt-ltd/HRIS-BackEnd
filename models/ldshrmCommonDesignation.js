const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDesignationSchema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    desCategory: Number,
    shortDescription: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    tableName: String

},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDesignationSchema);