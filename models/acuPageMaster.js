const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageMasterSchema = new mongoose.Schema({
    id: Number,
    pageName: String,
    pageUrl: String,
    parentID: Number,
    isInternalLink: Number,
    isActive: String,
    displayorder: Number,
    iconImagePath: String,
    moduleId: Number,
    isDisplayedInMenu: String,
    imagePath: String,
    IsAngularRoute: String,
    groupid: Number

  });

module.exports = mongoose.model("LoginDetails", acuPageMasterSchema);