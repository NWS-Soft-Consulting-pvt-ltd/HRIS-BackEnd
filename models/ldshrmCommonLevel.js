const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonLevelSchema = new mongoose.Schema({ 
    levelId:{
        type: String,
        unique:true,
        required: true,
    },
    levelCode: String,
    levelName: String,
    levelCreatedById: Number,
    levelCreatedDate: String,
    levelModifiedById: Number,
    levelModifiedDate: String,
    levelIsDeleted: Boolean,
    levelCultureId: Number,
    column1: String,
    column2: String,
    column3: String,
    column4: String,
    column5: String,
    column6: String,
    column7: String,
    column8: String,
    column9: String,
    column10: String

   });

module.exports = mongoose.model("LoginDetails",  ldshrmCommonLevelSchema);