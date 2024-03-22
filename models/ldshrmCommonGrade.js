const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonGradeSchema = new mongoose.Schema({ 
    gradeId:{
        type: String,
        unique:true,
        required: true,
    },
    gradeCode: String,
    gradeName: String,
    gradeGCCode: String,
    gradeEmpType: Number,
    gradeCreatedById: Number,
    gradeCreatedDate: String,
    gradeModifiedById: Number,
    gradeModifiedDate: String,
    gradeIsDeleted: Boolean,
    gradeCultureId: Number,
    column1: String,
    column2: String,
    column3: String,
    column4: String,
    column5: String,
    column6: String,
    column7: String,
    column8: String,
    column9: String,
    column10: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonGradeSchema);