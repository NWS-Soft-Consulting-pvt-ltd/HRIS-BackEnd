const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuActionAccess = new mongoose.Schema({
  id:{
    type: String,
    unique:true,
    required: true,
    },
     accessID: Number,
     actionID: Number,
     isActive:{
      type: String,
      required: true,
      },
     createdById: Number,
     modifiedById: Number,
   },
  { timestamps: true }
  );

module.exports = mongoose.model("LoginDetails",  acuActionAccess);