const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCultureSchema = new mongoose.Schema({
    id: String,
    name: String,
    code: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    tableName: String
},
    { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCultureSchema);