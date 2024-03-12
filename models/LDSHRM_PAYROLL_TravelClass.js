const mongoose =require('mongoose');

mongoose.pluralize(null);

const Schema = mongoose.Schema;
 const LDSHRM_PAYROLL_TravelClass = mongoose.Schema({
    trvlClassId:{
        type: Schema.type.ObjectId,
        unique:true,
        required: true,
    },
    trvlClassCreatedById:{
        type: Number,
        default: Null,
    },
    trvlClassCreatedDate:{
        type: Date,
        default: Null,
    },
    trvlClassModifiedById:{
        type: Number,
        default:Null,
    },
    trvlClassModifiedDate:{
        type: Date,
        default: Null,
    },
    trvlClassIsDeleted:{
        type: Boolean,
        default: Null,
    },
    trvlClassCultureId:{
        type: int,
    
        default: Null,
    },
   
 },{ timestamps: true });
 module.exports= Schema.model("LDSHRM_PAYROLL_TravelClass",LDSHRM_PAYROLL_TravelClass);