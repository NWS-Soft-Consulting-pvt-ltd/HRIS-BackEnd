const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDesCategorySchema = new mongoose.Schema({
    id: String,
    name: String,
    code: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number
},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDesCategorySchema);