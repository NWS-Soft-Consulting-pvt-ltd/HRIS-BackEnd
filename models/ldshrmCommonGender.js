const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonGenderSchema = new mongoose.Schema({
    id:{
        type: String,
        unique:true,
        required: true,
    },
    name: String,
    code: String,
    createdById: Number,
    modifiedById: Number,
    isDeleted: Boolean,
    cultureId: Number,
    tableName: String,
    sequenceNo: Number

},
{ timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonGenderSchema);