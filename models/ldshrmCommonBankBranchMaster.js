const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBankBranchMasterSchema = new mongoose.Schema({
      branchID: Number,
      bankId: Number,
      branchName: String,
      branchCode: String,
      ifscCode: String,
      isActive: String,
      createdById: Number,
      createdByEmpId: Number,
      createdDate: String,
      modifiedById: Number,
      modifiedByEmpId: Number,
      modifiedDate: String,
      isDeleted: String
      
});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonBankBranchMasterSchema);