const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonCultureSchema = new mongoose.Schema({
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
    tableName: String
},
    { timestamps: true }
);

module.exports = mongoose.model("LoginDetails",  ldshrmCommonCultureSchema);