const mongoose = require("mongoose");
mongoose.pluralize(null);

const ldshrmCommonLevelMappedDataSchema = new mongoose.Schema({ 
    id:{
        type: String,
        unique:true,
        required: true,
    },
    mappingId:{
        type: String,
        required: true,
    },
    hierarchyId: Number,
    parentActualId: Number,
    childActualId: Number,
    parentMappingId: Number,
    organizationId: Number,
    organization: String,
    orgMappingId: Number,
    zoneId: Number,
    zone: String,
    zoneMappingId: Number,
    regionId: Number,
    region: String,
    regionMappingId: Number,
    districtId: Number,
    district: String,
    districtMappingId: Number,
    companyTypeId: Number,
    companyType: String,
    companyTypeMappingId: Number,
    businessUnitId: Number,
    businessUnit: String,
    businessUnitMappingId: Number,
    departmentId: Number,
    department: String,
    departmentMappingId: Number,
    sectionId: Number,
    section: String,
    sectionMappingId: Number,
    isActive: Boolean,
    actualName: String,
    bUShortDesc: String,
    departmentShortDesc: String,
    sectionShortDesc: String,
    zoneCode: String,
    regionCode: String,
    districtCode: String,
    companyTypeCode: String,
    businessUnitCode: String,
    departmentCode: String,
    sectionCode: String

});

module.exports = mongoose.model("LoginDetails",  ldshrmCommonLevelMappedDataSchema);