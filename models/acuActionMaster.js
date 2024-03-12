const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuActionMasterSchema = new mongoose.Schema({
    id: String,
    action: String,
    description: String,
    isActive: String
    
});

module.exports = mongoose.model("LoginDetails",  acuActionMasterSchema);