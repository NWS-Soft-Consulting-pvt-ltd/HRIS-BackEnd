const mongoose = require("mongoose");
mongoose.pluralize(null);

const acuPageActionDetailsSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
        },
    pageID: Number,
    actionID: Number,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
   },
    { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  acuPageActionDetailsSchema);