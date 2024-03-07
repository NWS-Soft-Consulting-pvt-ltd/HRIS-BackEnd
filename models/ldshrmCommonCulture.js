const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCultureSchema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean,
    tableName: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCultureSchema);