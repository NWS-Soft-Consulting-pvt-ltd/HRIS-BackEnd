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
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    accGeneralRuleBUTypeId: Number

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAccomodationGeneralRuleSchema);