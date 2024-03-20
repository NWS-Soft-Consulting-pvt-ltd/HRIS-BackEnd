const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonEmployeeStatusSchema = new mongoose.Schema({
    empstcoId:{
        type: String,
        unique:true,
        required: true,
    },
    empstcoName: String,
    empstcoCode: String,
    empstcoCreatedById: Number,
    empstcoCreatedDate: String,
    empstcoModifiedById: Number,
    empstcoModifiedDate: String,
    empstcoIsDeleted: Boolean,
    empstcoCultureId: Number,
    column1: String,
    column2: String,
    column3: String,
    column4: String,
    column5: String,
    column6: String,
    column7: String,
    column8: String,
    column9: String,
    column10: String,
    isActualActive: Boolean

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonEmployeeStatusSchema);