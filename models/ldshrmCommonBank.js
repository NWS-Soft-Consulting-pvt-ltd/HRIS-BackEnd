const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBankSchema = new mongoose.Schema({
    id: Number,
    bankName: String,
    code: String,
    shortDescription: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    countryId: Number
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBankSchema);