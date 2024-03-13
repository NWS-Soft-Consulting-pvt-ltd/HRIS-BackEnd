const mongoose = require("mongoose");
mongoose.pluralize(null);

const errorHandlingSchema = new mongoose.Schema({
    pkErrorHandlingID:{
        type: String,
        unique:true,
        required: true,
    },
    errorNumber: Number,
    errorMessage: String,
    errorSeverity: Number,
    errorState: Number,
    errorProcedure: String,
    errorLine: Number,
    userName: String,
    hostName: String,
    timeStamp: String

 });

module.exports = mongoose.model("LoginDetails",  errorHandlingSchema);