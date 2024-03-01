const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageActionDetailsSchema = new mongoose.Schema({
    id: Number,
    pageID: Number,
    actionID: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
    createdDate: String,
    modifiedDate: String

  });

module.exports = mongoose.model("LoginDetails",  acuPageActionDetailsSchema);