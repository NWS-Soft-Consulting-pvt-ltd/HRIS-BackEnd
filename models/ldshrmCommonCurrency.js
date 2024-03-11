const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCurrencySchema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    lowestDenominator: String,
    createdById: Number,
    // createdDate: String,
    modifiedById: Number,
    // modifiedDate: String,
    isDeleted: Boolean,
    cultureId: Number
},


);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCurrencySchema);