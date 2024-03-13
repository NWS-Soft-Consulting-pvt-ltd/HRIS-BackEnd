const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuActionMasterSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
        },
    action: String,
    description: String,
    isActive:{
        type: Boolean,
        required: true,
        },
   
    });

module.exports = mongoose.model("LoginDetails",  acuActionMasterSchema);