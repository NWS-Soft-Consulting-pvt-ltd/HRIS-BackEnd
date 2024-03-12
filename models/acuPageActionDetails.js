const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageActionDetailsSchema = new mongoose.Schema({
    id: String,
    pageID: Number,
    actionID: Number,
    isActive: String,
    createdById: Number,
    modifiedById: Number,
   
    },
    
    { timestamps: true }

    );

module.exports = mongoose.model("LoginDetails",  acuPageActionDetailsSchema);