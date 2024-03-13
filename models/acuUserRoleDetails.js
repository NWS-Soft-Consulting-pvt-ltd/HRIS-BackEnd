const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuUserRoleDetailsSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
     userID: Number,
     roleID: Number,
     isActive: Boolean

    });

module.exports = mongoose.model("LoginDetails",  acuUserRoleDetailsSchema);