const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCurrencyCultureSchema = new mongoose.Schema({
    id: Number,
    currencyId: Number,
    name: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean,
    cultureId: Number
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCurrencyCultureSchema);