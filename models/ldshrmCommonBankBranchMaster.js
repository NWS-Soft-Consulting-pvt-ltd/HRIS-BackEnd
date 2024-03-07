const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonBankBranchMasterSchema = new mongoose.Schema({
      branchID: Number,
      bankId: Number,
      branchName: String,
      branchCode: String,
      ifscCode: String,
      isActive: Boolean,
      createdById: Number,
      createdByEmpId: Number,
      modifiedById: Number,
      modifiedByEmpId: Number,
      isDeleted: Boolean
      },
      { timestamps: true }
      );

  module.exports = mongoose.model("LoginDetails",  ldshrmCommonBankBranchMasterSchema);