const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonDoamasterallSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    moduleId: Number,
    gradeId: Number,
    actionId: Number,
    storeTypeId: Number,
    designationId: Number,
    startDate: String,
    endDate: String,
    roleId: Number,
    countryId: Number,
    empTypeId: Number
    },
    { timestamps: true }
    );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonDoamasterallSchema);