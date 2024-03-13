const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCurrencyCultureSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    currencyId: Number,
    name: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCurrencyCultureSchema);