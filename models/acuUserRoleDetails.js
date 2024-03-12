const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuUserRoleDetailsSchema = new mongoose.Schema({
     iD: String,
     userID: Number,
     roleID: Number,
     isActive: String

    });

module.exports = mongoose.model("LoginDetails",  acuUserRoleDetailsSchema);