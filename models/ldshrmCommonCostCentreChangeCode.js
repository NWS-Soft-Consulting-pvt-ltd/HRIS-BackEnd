const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCostCentreChangeCodeSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    code: String,
    description: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean
},
    { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCostCentreChangeCodeSchema);