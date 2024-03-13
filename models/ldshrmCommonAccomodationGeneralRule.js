const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonAccomodationGeneralRuleSchema = new mongoose.Schema({
    accGeneralRuleId:{
        type: String,
        unique:true,
        required: true,
    },
    accGeneralRuleCountryId: Number,
    accGeneralRuleEmpTypeId: Number,
    accGeneralRuleGradeId: Number,
    accGeneralRuleAccTypesId: Number,
    isDeleted: Boolean,
    createdById: Number,
    modifiedById: Number,
    accGeneralRuleBUTypeId: Number
},
   { timestamps: true }  
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonAccomodationGeneralRuleSchema);