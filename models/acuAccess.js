const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuAccessSchema = new mongoose.Schema(
  {
    id: Number,
    accessFor: Number,
    accessTypeID: Number,
    pageID: Number,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("LoginDetails", acuAccessSchema);
