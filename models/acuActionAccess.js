const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuActionAccess = new mongoose.Schema({
     id: String,
     accessID: Number,
     actionID: Number,
     isActive: String,
     createdById: Number,
     modifiedById: Number,
   },
  { timestamps: true }
  );

module.exports = mongoose.model("LoginDetails",  acuActionAccess);