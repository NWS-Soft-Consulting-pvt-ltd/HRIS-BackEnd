const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonModulesSchema = new mongoose.Schema({ 
    moduleId:{
        type: String,
        unique:true,
        required: true,
    },
    moduleName: String,
    moduleCode: String,
    isDeleted: Boolean
    
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonModulesSchema);