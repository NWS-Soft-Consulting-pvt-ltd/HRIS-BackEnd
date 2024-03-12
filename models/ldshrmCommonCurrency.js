const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCurrencySchema = new mongoose.Schema({
    id: String,
    name: String,
    code: String,
    lowestDenominator: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number
    
},
{ timestamps: true }

);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCurrencySchema);