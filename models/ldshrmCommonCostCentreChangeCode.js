const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCostCentreChangeCodeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    code: String,
    description: String,
    createdById: Number,
    createdDate: String,
    modifiedById: Number,
    modifiedDate: String,
    isDeleted: Boolean

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCostCentreChangeCodeSchema);