const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonHierarchyConfigurationSettingsSchema = new mongoose.Schema({ 
    id:{
        type: String,
        unique:true,
        required: true,
    },
    hierarchyId: Number,
    parentActualId: Number,
    childActualId: Number,
    isActive: Boolean,
    createdById: Number,
    modifiedById: Number,
    parentHierarchy: String,
    parentMappingId: Number

  },
  { timestamps: true } 
  );

module.exports = mongoose.model("LoginDetails",  ldshrmCommonHierarchyConfigurationSettingsSchema);