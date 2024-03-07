const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCareerLevelSchema = new mongoose.Schema({
    id: Number,
    name: String,
    shortName: String,
    code: String,
    isActive: Boolean,
    isDeleted: Boolean,
    createdBy: Number,
    modifiedBy: Number,
    },
   { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCareerLevelSchema);