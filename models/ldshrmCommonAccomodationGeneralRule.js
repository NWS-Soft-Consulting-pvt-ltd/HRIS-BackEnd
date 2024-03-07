const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAccomodationGeneralRuleSchema = new mongoose.Schema({
    accGeneralRuleId: Number,
    accGeneralRuleCountryId: Number,
    accGeneralRuleEmpTypeId: Number,
    accGeneralRuleGradeId: Number,
    accGeneralRuleAccTypesId: Number,
    isDeleted: String,
    createdById: Number,
    modifiedById: Number,
    accGeneralRuleBUTypeId: Number
},
   { timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAccomodationGeneralRuleSchema);