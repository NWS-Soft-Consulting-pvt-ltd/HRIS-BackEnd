const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageMasterSchema = new mongoose.Schema({
  id:{
    type: String,
    unique:true,
    required: true,
    },
    pageName: String,
    pageUrl: String,
    parentID: Number,
    isInternalLink: Number,
    isActive: Boolean,
    displayorder: Number,
    iconImagePath: String,
    moduleId: Number,
    isDisplayedInMenu: Boolean,
    imagePath: String,
    IsAngularRoute: Boolean,
    groupid: Number

  });

module.exports = mongoose.model("LoginDetails", acuPageMasterSchema);